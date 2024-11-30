'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { concepts } from '../data/concepts'

interface ConceptModalProps {
  selectedConcept: string | null
  relatedConcepts: string[]
  onClose: () => void
  onConceptClick: (concept: string) => void
}

export default function ConceptModal({ 
  selectedConcept, 
  relatedConcepts, 
  onClose, 
  onConceptClick 
}: ConceptModalProps) {
  if (!selectedConcept) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{selectedConcept}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{concepts[selectedConcept]}</p>
        {relatedConcepts.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Conceitos Relacionados:</h4>
            <div className="flex flex-wrap gap-2">
              {relatedConcepts.map((concept) => (
                <button
                  key={concept}
                  onClick={() => onConceptClick(concept)}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {concept}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
