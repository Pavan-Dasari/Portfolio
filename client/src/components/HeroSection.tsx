import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import TypewriterEffect from "./TypewriterEffect";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-3xl font-mono mb-3">
            <span>I am a </span>
            <TypewriterEffect />
          </h1>
          
          <div className="mt-4">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold glow-text mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              I Build AI-Driven, Scalable Products
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Product Manager with 4+ years of experience delivering tech products from 0→1. 
              Launched microlearning platforms, AI features, and APIs powering thousands of users.
            </motion.p>
            
            <motion.a 
              href="#projects" 
              className="inline-block px-8 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold rounded-lg shadow-lg hover:shadow-[hsl(var(--primary))/50] animate-pulse-glow transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Explore My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
