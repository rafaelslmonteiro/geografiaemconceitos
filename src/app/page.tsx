'use client'

import { motion } from 'framer-motion'
import SearchBar from '@/app/components/SearchBar'
import WordCloud from '@/app/components/WordCloud'
import RandomConcept from '@/app/components/RandomConcept'

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 sm:p-8 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400"
        >
          Explore Conceitos Geográficos
        </motion.h1>
        <SearchBar />
        <RandomConcept />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">Nuvem de Conceitos</h2>
          <WordCloud />
        </motion.div>
      </div>
    </motion.div>
  )
}
