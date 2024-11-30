'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { concepts } from '@/app/data/concepts'

export default function RandomConcept() {
  const [randomConcept, setRandomConcept] = useState<string | null>(null)

  const getRandomConcept = () => {
    const conceptKeys = Object.keys(concepts)
    const randomKey = conceptKeys[Math.floor(Math.random() * conceptKeys.length)]
    setRandomConcept(randomKey)
  }

  useEffect(() => {
    getRandomConcept()
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Conceito do Dia</h2>
      {randomConcept && (
        <>
          <h3 className="text-lg font-medium mb-2 text-blue-700 dark:text-blue-300">{randomConcept}</h3>
          <p className="text-blue-600 dark:text-blue-400">{concepts[randomConcept]}</p>
        </>
      )}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={getRandomConcept}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Explorar Outro Conceito
      </motion.button>
    </motion.div>
  )
}
