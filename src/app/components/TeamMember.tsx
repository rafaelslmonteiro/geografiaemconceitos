import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface TeamMemberProps {
  name: string
  image: string
  education: string
  occupation: string
  research: string
  bio: string
  lattes: string
}

export default function TeamMember({ name, image, education, occupation, research, bio, lattes }: TeamMemberProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-48 h-48 relative mb-4 md:mb-0 md:mr-6">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{education}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{occupation}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Áreas de pesquisa:</strong> {research}</p>
          <p className="text-gray-700 dark:text-gray-200 mb-4">{bio}</p>
          <a 
            href={lattes} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 mt-4"
          >
            <span className="mr-2">Currículo Lattes</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

