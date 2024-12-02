'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import TeamMember from '../components/TeamMember'

const teamMembers = [
  {
    name: 'Ana Carolina Cebin Pereira',
    image: '/Ana.png',
    education: 'Formada em Sistemas de Informação com pós-graduação em Gestão de Produtos',
    occupation: 'Product Manager na EASYB2B',
    research: 'Marketplaces B2B e B2C, metodologias ágeis, transformação digital',
    bio: 'Como Product Manager na EASYB2B, minha jornada envolve colaboração com equipes diversificadas onde emprego minha visão estratégica e experiência em metodologias ágeis para entregar soluções inovadoras e de alto valor. Possuo expertise em Marketplaces B2B e B2C, respaldada por formação em Sistemas de Informação e uma pós-graduação em Gestão de Produtos. Essa combinação me proporciona uma visão completa e criativa das oportunidades e desafios no mercado de produtos digitais. Meu propósito é impulsionar a transformação digital em diversos setores, usando a inovação e a tecnologia para gerar impacto positivo. Sou entusiasta do aprendizado contínuo, da colaboração e da troca de conhecimento, sempre em busca de novos desafios para meu crescimento profissional.',
    lattes: 'https://www.linkedin.com/in/ana-carolina-cebin-pereira-223883169/',
},
  {
    name: 'Izabela Dolores Cebin Bassani',
    image: '/Izabela.jpeg',
    education: 'Doutora em Geografia pela Universidade Federal do Espírito Santo (2020)',
    occupation: 'Professora efetiva na Secretaria de Estado da Educação do Espírito Santo',
    research: 'Geografia Urbana, reestruturação imobiliária, centro-periferia, condomínios industriais, loteamento urbano e renda da terra',
    bio: 'Possui graduação em Geografia pela Universidade Federal do Espírito Santo (2013), mestrado em Geografia pela mesma instituição (2016) e doutorado em Geografia pela Universidade Federal do Espírito Santo (2020). Atualmente é professor efetivo na Secretaria de Estado da Educação do Espírito Santo. Tem experiência na área de Geografia, com ênfase em Geografia Urbana, atuando principalmente nos seguintes temas: reestruturação imobiliária, centro-periferia, condomínios industriais, loteamento urbano e renda da terra.',
    lattes: 'http://lattes.cnpq.br/1234567890',
  },
  {
    name: 'Rafael Santos da Luz Monteiro',
    image: '/Rafa.jpg',
    education: 'Doutor em Geografia pela Universidade Federal do Espírito Santo',
    occupation: 'Professor efetivo da rede estadual de Ensino Médio no estado do Espírito Santo',
    research: 'Geografia Urbana, Produção Imobiliária, Renda da Terra e Financeirização do Capital',
    bio: 'Licenciado pleno em Geografia pela UFES em 2008. Professor do quadro efetivo da rede estadual de Ensino Médio no estado do Espírito Santo desde agosto de 2009. Mestre em Geografia pelo PPGG/UFES. Doutor em Geografia na área de Produção Imobiliária pelo PPGG/UFES. Áreas de interesse: Geografia Urbana, Produção Imobiliária, Renda da Terra e Financeirização do Capital.',
    lattes: 'http://lattes.cnpq.br/0987654321',
  },
]

export default function Sobre() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 sm:p-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400"
        >
          Sobre o Projeto
        </motion.h1>
        <motion.p 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 text-gray-700 dark:text-gray-300"
        >
          O projeto "Geografia em Conceitos" apresenta uma coletânea de conceitos-chave da Geografia, abrangendo diferentes ramos e temáticas da área, como Geografia Física, Geografia Humana e Geopolítica. Os conceitos exploram desde aspectos naturais, como biodiversidade e mudanças climáticas, até dinâmicas sociais, como globalização, segregação socioespacial e economia informal. O objetivo é oferecer uma visão ampla e integrada sobre como os fenômenos naturais e sociais interagem no espaço geográfico, auxiliando estudantes e interessados a compreender as relações complexas.
        </motion.p>
        <motion.h2 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-300"
        >
          Nossa Equipe
        </motion.h2>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-8"
        >
          <Link href="/" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            Voltar para a página inicial
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

