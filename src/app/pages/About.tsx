import { motion, useScroll, useTransform } from "motion/react";
import { Code2, Palette, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useRef, useState, useEffect } from "react";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const skills = [
    { name: "JavaScript/TypeScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "React & Next.js", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js & Express", level: 80, color: "from-green-400 to-emerald-500" },
    { name: "Python", level: 75, color: "from-blue-400 to-indigo-500" },
    { name: "UI/UX Design", level: 85, color: "from-pink-400 to-purple-500" },
    { name: "Database (SQL/NoSQL)", level: 80, color: "from-purple-400 to-violet-500" },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my priority.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Design First",
      description: "Believing in the power of great design to create amazing user experiences.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly learning and adopting new technologies to stay ahead.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to achieve common goals.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl mb-4"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Get to know more about my journey, skills, and what drives me as a developer.
          </motion.p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{ scale, opacity }}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MDU5NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl mb-6"
            >
              My Story
            </motion.h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              {[
                "I'm a passionate developer with a love for creating innovative digital solutions. My journey in tech started during my college years, where I discovered my passion for combining creativity with technology.",
                "With expertise in full-stack development, I've worked on diverse projects ranging from web applications to mobile solutions. I believe in writing clean, efficient code and creating user experiences that make a difference.",
                "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl mb-8 text-center"
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl mb-8 text-center"
          >
            What I Value
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000 }}
              >
                <Card className="h-full hover:shadow-2xl transition-shadow group">
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SkillBar({ skill, index }: { skill: { name: string; level: number; color: string }; index: number }) {
  const [displayLevel, setDisplayLevel] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            setDisplayLevel((prev) => {
              if (prev >= skill.level) {
                clearInterval(timer);
                return skill.level;
              }
              return prev + 1;
            });
          }, 15);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-slate-700">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-500"
        >
          {displayLevel}%
        </motion.span>
      </div>
      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${displayLevel}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          <motion.div
            animate={{
              x: [0, 100, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
