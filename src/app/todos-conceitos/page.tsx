'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { concepts } from '@/app/data/concepts'
import Link from 'next/link'
import { Search } from 'lucide-react'
import ConceptModal from '@/app/components/ConceptModal'

function findRelatedConcepts(currentConcept: string, allConcepts: Record<string, string>): string[] {
  const currentDefinition = allConcepts[currentConcept].toLowerCase()
  return Object.keys(allConcepts).filter(concept => 
    concept !== currentConcept && 
    (currentDefinition.includes(concept.toLowerCase()) || 
     allConcepts[concept].toLowerCase().includes(currentConcept.toLowerCase()))
  ).slice(0, 10)
}

export default function TodosConceitos() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null)
  const [relatedConcepts, setRelatedConcepts] = useState<string[]>([])

  const filteredConcepts = Object.keys(concepts)
  .filter(concept =>
    concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
    concepts[concept].toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => a.localeCompare(b, 'pt-BR'))

  useEffect(() => {
    if (selectedConcept) {
      setRelatedConcepts(findRelatedConcepts(selectedConcept, concepts))
    }
  }, [selectedConcept])

  const handleConceptClick = (concept: string) => {
    setSelectedConcept(concept)
    setRelatedConcepts(findRelatedConcepts(concept, concepts))
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 sm:p-8 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400"
        >
          Todos os Conceitos
        </motion.h1>

        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Buscar conceitos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredConcepts.map((concept, index) => (
              <motion.div
                key={concept}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => handleConceptClick(concept)}
              >
                <h2 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">{concept}</h2>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredConcepts.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            Nenhum conceito encontrado para "{searchTerm}".
          </p>
        )}

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <motion.button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voltar para a Página Inicial
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedConcept && (
          <ConceptModal
            selectedConcept={selectedConcept}
            relatedConcepts={relatedConcepts}
            onClose={() => setSelectedConcept(null)}
            onConceptClick={handleConceptClick}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

