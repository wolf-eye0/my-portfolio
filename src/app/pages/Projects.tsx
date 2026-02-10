import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, team workspaces, and productivity analytics.",
      image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["TypeScript", "React", "Firebase", "Tailwind"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and performance tracking.",
      image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "PostgreSQL", "Recharts", "API"],
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
      gradient: "from-green-600 to-teal-600",
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, comments, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "GraphQL", "Contentful", "Vercel"],
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      title: "Portfolio Website Builder",
      description: "A drag-and-drop website builder for creating personal portfolio websites without coding.",
      image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "DnD", "AWS", "S3"],
      github: "https://github.com/yourusername/project6",
      demo: "https://project6-demo.com",
      gradient: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl mb-4"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            A showcase of my work, featuring web applications, tools, and creative solutions
            I've built using modern technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full flex flex-col hover:shadow-2xl transition-shadow group overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                      </motion.div>
                      
                      {/* Gradient overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                      />

                      {/* Quick action buttons on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="p-3 bg-white rounded-full shadow-lg"
                        >
                          <Github className="w-6 h-6 text-slate-900" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="p-3 bg-white rounded-full shadow-lg"
                        >
                          <ExternalLink className="w-6 h-6 text-slate-900" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pt-6">
                    <motion.h3
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-xl mb-2 group-hover:text-blue-600 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * tagIndex }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Badge variant="secondary">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button size="sm" className="w-full" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white"
          >
            <h3 className="text-2xl mb-4">Want to see more?</h3>
            <p className="mb-6">Check out my GitHub for more projects and contributions!</p>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
