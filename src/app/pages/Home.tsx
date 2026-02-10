import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code, Zap } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";

import { AnimatedText } from "../components/AnimatedText";
import { useRef } from "react";

export function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
          style={{ y, opacity }}
        />

        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-400/20 rounded-lg blur-xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-4"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Welcome to my portfolio</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block text-slate-900"
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  Your Name
                </motion.span>
              </h1>

              <AnimatedText
                text="Full Stack Developer & Designer"
                className="text-xl md:text-2xl text-slate-600 mb-6"
                delay={0.6}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-slate-500 mb-8 leading-relaxed"
              >
                Passionate about creating beautiful, functional, and user-friendly
                digital experiences. Specialized in modern web technologies and
                innovative solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to="/projects">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="group">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline">
                      Get In Touch
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex gap-4"
              >
                {[
                  { href: "https://github.com/yourusername", icon: Github, color: "text-slate-700" },
                  { href: "https://linkedin.com/in/yourusername", icon: Linkedin, color: "text-blue-600" },
                  { href: "mailto:your.email@example.com", icon: Mail, color: "text-purple-600" },
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  >
                    <social.icon className={`w-6 h-6 ${social.color}`} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-md mx-auto"
              >
                <motion.div
                  animate={{
                    rotate: [6, 8, 6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-6"
                />
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white p-2 rounded-3xl shadow-2xl"
                >
                  <img
                    src="/images/me.jpg"
                    alt="My Profile"
                    className="rounded-full w-full h-full object-cover border-4 border-white shadow-2xl relative z-10"
                  />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg"
                >
                  <Code className="w-8 h-8 text-blue-600" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg"
                >
                  <Zap className="w-8 h-8 text-purple-600" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-3 bg-slate-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "3+", delay: 0 },
              { label: "Projects Completed", value: "20+", delay: 0.1 },
              { label: "Certificates", value: "10+", delay: 0.2 },
              { label: "Happy Clients", value: "15+", delay: 0.3 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: stat.delay + 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.4 }}
                  className="text-slate-600"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
