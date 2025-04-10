import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[hsl(var(--card))]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            I'm a passionate Product Manager with a strong <span className="text-[hsl(var(--primary))] glow-yellow">technical background</span> in Python, APIs, AI, and dashboard development. 
            My experience spans <span className="text-[hsl(var(--accent))] glow-blue">global product leadership</span> across multiple industries, 
            collaborating with cross-functional teams to deliver innovative solutions. 
            I excel in <span className="text-[hsl(var(--chart-3))] glow-green">product strategy, execution, and scalability</span>, 
            with a proven track record of launching successful products from concept to market. 
            My approach combines data-driven decision making with user-centered design principles to 
            create products that solve real problems and delight users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
