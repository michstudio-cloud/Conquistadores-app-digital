
import React, { useState, useCallback, ChangeEvent } from 'react';
// FIX: Added .ts extension to the import path.
import { Requirement, Evidence, EvidenceStatus } from '../types.ts';
// FIX: Added .ts extension to the import path.
import { getAIFeedbackForEvidence } from '../services/geminiService.ts';
// FIX: Added .tsx extension to the import path.
import { SparklesIcon, PaperClipIcon } from './Icons.tsx';

interface EvidenceUploaderProps {
  requirement: Requirement;
  evidence: Evidence;
  onEvidenceUpdate: (updatedEvidence: Evidence) => void;
}

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = error => reject(error);
    });
};

const EvidenceUploader: React.FC<EvidenceUploaderProps> = ({ requirement, evidence, onEvidenceUpdate }) => {
    const [description, setDescription] = useState(evidence.description);
    const [file, setFile] = useState<File | null>(null);
    const [isGeneratingFeedback, setIsGeneratingFeedback] = useState(false);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleGetAIFeedback = useCallback(async () => {
        setIsGeneratingFeedback(true);
        let imagePart;
        if (file) {
            const base64 = await fileToBase64(file);
            imagePart = { base64, type: file.type };
        } else if(evidence.file) {
            imagePart = { base64: evidence.file.base64, type: evidence.file.type };
        }
        
        const feedback = await getAIFeedbackForEvidence(
            requirement.title,
            requirement.description,
            description,
            imagePart
        );

        onEvidenceUpdate({ ...evidence, aiFeedback: feedback, description });
        setIsGeneratingFeedback(false);
    }, [file, description, requirement, evidence, onEvidenceUpdate]);

    const handleSubmitForReview = async () => {
        let fileData;
        if(file) {
            const base64 = await fileToBase64(file);
            fileData = { name: file.name, base64, type: file.type };
        } else {
            fileData = evidence.file;
        }

        onEvidenceUpdate({ 
            ...evidence, 
            description,
            file: fileData,
            status: EvidenceStatus.SUBMITTED,
            submittedAt: new Date()
        });
    }

    const isSubmitted = evidence.status === EvidenceStatus.SUBMITTED || evidence.status === EvidenceStatus.COMPLETE;

    return (
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h4 className="font-semibold text-gray-700">Sube tu Evidencia</h4>
            
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Escribe una descripción de tu evidencia aquí..."
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
                disabled={isSubmitted}
            ></textarea>

            <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 px-4 py-2 bg-white text-blue-500 rounded-lg shadow-sm tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition">
                    <PaperClipIcon className="h-5 w-5" />
                    <span className="text-sm font-medium">{file ? 'Cambiar archivo' : 'Adjuntar archivo'}</span>
                    <input type='file' className="hidden" onChange={handleFileChange} accept="image/*,.pdf" disabled={isSubmitted}/>
                </label>
                {file && <span className="text-sm text-gray-600">{file.name}</span>}
                {!file && evidence.file && <span className="text-sm text-gray-600">{evidence.file.name}</span>}
            </div>

            {evidence.aiFeedback && (
                <div className="p-4 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-800 rounded-r-lg">
                    <div className="flex items-center space-x-2 mb-2">
                        <SparklesIcon className="h-5 w-5 text-indigo-600" />
                        <h5 className="font-bold">Sugerencia de la IA</h5>
                    </div>
                    <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: evidence.aiFeedback.replace(/\n/g, '<br />') }}></div>
                </div>
            )}
             {isSubmitted && (
                 <div className="p-3 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg text-sm">
                    Enviado para revisión por tu instructor el {evidence.submittedAt?.toLocaleDateString()}.
                 </div>
            )}

            {!isSubmitted && (
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handleGetAIFeedback}
                        disabled={!description && !file || isGeneratingFeedback}
                        className="flex-1 flex justify-center items-center space-x-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                    >
                        {isGeneratingFeedback ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Analizando...
                            </>
                        ) : (
                            <>
                                <SparklesIcon className="h-5 w-5" />
                                <span>Obtener Sugerencia con IA</span>
                            </>
                        )}
                    </button>
                    <button
                        onClick={handleSubmitForReview}
                        disabled={!description && !file}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                    >
                        Enviar para Revisión
                    </button>
                </div>
            )}
        </div>
    );
};

export default EvidenceUploader;