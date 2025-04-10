import { motion } from "framer-motion";
import { Skill } from "../data/skills";

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.div
      className="skill-badge px-4 py-2 bg-[hsl(var(--muted))] rounded-full text-white border border-[hsl(var(--primary))/30]"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 0 15px rgba(255, 193, 7, 0.6)",
        transition: { duration: 0.3 }
      }}
      transition={{ duration: 0.3 }}
    >
      {skill.name}
    </motion.div>
  );
}
