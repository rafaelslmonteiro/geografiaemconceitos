'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { concepts } from '@/app/data/concepts'
import Link from 'next/link'
import ConceptModal from './ConceptModal'

function findRelatedConcepts(currentConcept: string, allConcepts: Record<string, string>): string[] {
  const currentDefinition = allConcepts[currentConcept].toLowerCase()
  return Object.keys(allConcepts).filter(concept => 
    concept !== currentConcept && 
    (currentDefinition.includes(concept.toLowerCase()) || 
     allConcepts[concept].toLowerCase().includes(currentConcept.toLowerCase()))
  ).slice(0, 10)
}

export default function WordCloud() {
  const [randomConcepts, setRandomConcepts] = useState<string[]>([])
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null)
  const [relatedConcepts, setRelatedConcepts] = useState<string[]>([])

  useEffect(() => {
    const conceptKeys = Object.keys(concepts)
    const shuffled = conceptKeys.sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 20)
    const withRelated = selected.flatMap(concept => [concept, ...findRelatedConcepts(concept, concepts)])
    setRandomConcepts([...new Set(withRelated)].slice(0, 40))
  }, [])

  useEffect(() => {
    if (selectedConcept) {
      setRelatedConcepts(findRelatedConcepts(selectedConcept, concepts))
    }
  }, [selectedConcept])

  const getRandomColor = () => {
    const colors = [
      'bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200',
      'bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200',
      'bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200',
      'bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-200',
      'bg-purple-200 text-purple-800 dark:bg-purple-700 dark:text-purple-200',
      'bg-pink-200 text-pink-800 dark:bg-pink-700 dark:text-pink-200',
      'bg-indigo-200 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200',
      'bg-teal-200 text-teal-800 dark:bg-teal-700 dark:text-teal-200',
      'bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-200',
      'bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-200',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const handleConceptClick = (concept: string) => {
    setSelectedConcept(concept)
    setRelatedConcepts(findRelatedConcepts(concept, concepts))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="flex flex-wrap justify-center gap-4">
          {randomConcepts.map((concept, index) => (
            <motion.span
              key={concept}
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getRandomColor()} hover:opacity-80 transition-colors duration-200 cursor-pointer`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                scale: 1.1,
                rotate: [-1, 1, -1, 1, 0],
                transition: {
                  duration: 0.3,
                  rotate: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.2
                  }
                }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleConceptClick(concept)}
            >
              {concept}
            </motion.span>
          ))}
        </div>
      </div>
      <Link href="/todos-conceitos" className="mt-6">
        <motion.button
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-md"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Todos os Conceitos
        </motion.button>
      </Link>
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
    </div>
  )
}
