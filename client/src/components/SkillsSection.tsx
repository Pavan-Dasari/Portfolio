import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SkillBadge from "./SkillBadge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[hsl(var(--card))]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
