import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingUp, LightbulbIcon, PuzzleIcon, BarChart3 } from "lucide-react";

export default function ProjectDetail() {
  const [, params] = useRoute<{ id: string }>("/projects/:id");
  const projectId = params?.id;
  
  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Pavan Dasari`;
    }
  }, [project]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/" className="text-[hsl(var(--primary))] hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Project Header */}
        <motion.div 
          className={`w-full py-20 bg-gradient-to-r ${project.color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-white mb-8 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="text-white/90 text-xl mb-4">Role: {project.role}</div>
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-white font-medium">
              Result: {project.result}
            </div>
          </div>
        </motion.div>
        
        {/* Project Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Overview */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 section-heading">Project Overview</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6 max-w-4xl">
              {project.detailedDescription}
            </p>
          </motion.section>
          
          {/* Key Points */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center section-heading">
              <LightbulbIcon className="mr-2 h-5 w-5 text-[hsl(var(--primary))]" />
              Key Contributions
            </h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {project.keyPoints?.map((point, index) => (
                <motion.li 
                  key={index}
                  className="bg-[hsl(var(--card))] p-4 rounded-lg border border-[hsl(var(--border))]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.section>
          
          {/* Challenges & Solutions */}
          <motion.section 
            className="mb-16 grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center section-heading">
                <PuzzleIcon className="mr-2 h-5 w-5 text-[hsl(var(--accent))]" />
                Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges?.map((challenge, index) => (
                  <motion.li 
                    key={index}
                    className="bg-[hsl(var(--card))] p-4 rounded-lg border border-[hsl(var(--border))]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center section-heading">
                <LightbulbIcon className="mr-2 h-5 w-5 text-[hsl(var(--chart-3))]" />
                Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions?.map((solution, index) => (
                  <motion.li 
                    key={index}
                    className="bg-[hsl(var(--card))] p-4 rounded-lg border border-[hsl(var(--border))]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    {solution}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
          
          {/* KPIs & Results */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center section-heading">
              <BarChart3 className="mr-2 h-5 w-5 text-[hsl(var(--primary))]" />
              Key Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.kpis?.map((kpi, index) => (
                <motion.div 
                  key={index}
                  className="bg-[hsl(var(--card))] p-6 rounded-lg border border-[hsl(var(--border))] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <h3 className="text-gray-400 text-sm mb-2">{kpi.label}</h3>
                  <div className="text-3xl font-bold mb-2">{kpi.value}</div>
                  <div className={`text-sm font-medium flex items-center justify-center ${
                    kpi.change.startsWith('+') ? 'text-green-500' : 
                    kpi.change.startsWith('-') ? 'text-red-500' : 'text-gray-400'
                  }`}>
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {kpi.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Back to Projects */}
          <div className="flex justify-center mt-12">
            <Link href="/#projects" className="inline-flex items-center justify-center h-10 px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:bg-[hsl(var(--primary))/90] transition-colors">
              View More Projects
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
