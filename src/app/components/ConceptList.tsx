'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { concepts } from '@/app/data/concepts'

export default function ConceptList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Object.entries(concepts).map(([concept, description], index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        >
          <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">{concept}</h3>
          <motion.p
            className="text-gray-600 dark:text-gray-300"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: expandedIndex === index ? 'auto' : 0,
              opacity: expandedIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  )
}

