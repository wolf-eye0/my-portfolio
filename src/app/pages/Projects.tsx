import { motion } from "motion/react";
import { Github, Brain, Cpu, Terminal } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "AI Model Development", // You can change this to your specific project name
      description: "A custom AI model built to solve complex problems. Developed using Python and modern machine learning frameworks, focusing on efficiency and accuracy.",
      // Using a gradient placeholder since you don't have an image yet
      image: null,
      tags: ["Python", "TensorFlow", "Data Science", "Algorithm"],
      // REPLACE THIS with the specific link to your AI repository!
      github: "https://github.com/YOUR_USERNAME/YOUR_AI_REPO_NAME",
    }
  ];

  return (
    <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
      <div className="container px-4 mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-slate-900"
          >
            Featured Project
          </motion.h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-slate-600">
            A showcase of my technical capabilities in Artificial Intelligence.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">

                  {/* Left Side: Visual/Icon (Since no image) */}
                  <div className="bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-12 min-h-[300px]">
                    <div className="text-center text-white/80">
                      <Brain className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                      <Cpu className="w-12 h-12 inline-block mr-4 opacity-50" />
                      <Terminal className="w-12 h-12 inline-block opacity-50" />
                    </div>
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex flex-col h-full">
                    <CardHeader>
                      <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0 pb-8 px-6">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-slate-900 hover:bg-slate-800" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code on GitHub
                          </a>
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
