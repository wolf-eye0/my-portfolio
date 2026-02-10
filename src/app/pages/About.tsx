import { motion, useScroll, useTransform } from "motion/react";
import { Database, Shield, Brain, Terminal, Code2 } from "lucide-react"; // Updated icons
import { Card, CardContent } from "../components/ui/card";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Updated Skills List for Cyber Security
  const skills = [
    { name: "Python", level: 90, color: "from-blue-400 to-indigo-500" },
    { name: "Database & SQL", level: 85, color: "from-green-400 to-emerald-500" },
    { name: "C Programming", level: 80, color: "from-slate-400 to-gray-500" },
    { name: "AI Model Development", level: 75, color: "from-purple-400 to-pink-500" },
  ];

  return (
    <div className="pt-20 pb-20 overflow-hidden" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Using your profile image here */}
                <img
                  src="/images/me.jpg"
                  alt="About M.Nihad Pc"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative background shape */}
              <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-blue-100 rounded-2xl" />
            </motion.div>

            {/* Story Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-blue-600" />
                My Story
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                My journey into technology didn't start with building websites—it started with breaking them.
                Fascinated by how systems work (and fail), I pivoted from general development to
                <span className="font-semibold text-blue-600"> Cyber Security Engineering</span>.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Today, I specialize in identifying vulnerabilities before attackers do.
                I combine my knowledge of low-level languages like <span className="font-semibold text-slate-800">C</span> with modern
                <span className="font-semibold text-purple-600"> AI Model Development</span> to create intelligent defense systems.
                My goal is simple: to build digital fortresses that are as resilient as they are efficient.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-bold text-lg mb-1">100%</h4>
                  <p className="text-sm text-slate-500">Secure Code</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-bold text-lg mb-1">24/7</h4>
                  <p className="text-sm text-slate-500">System Monitoring</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Skills Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Terminal className="text-blue-600" />
              Technical Arsenal
            </h3>

            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700 flex items-center gap-2">
                      {index === 0 && <Code2 size={16} />}
                      {index === 1 && <Database size={16} />}
                      {index === 2 && <Terminal size={16} />}
                      {index === 3 && <Brain size={16} />}
                      {skill.name}
                    </span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
