import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
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
    <div ref={ref} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 -z-20"
          style={{ y, opacity }}
        />

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10" />

        <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side: Text */}
          <div className="space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                Available for work
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  M.Nihad Pc
                </span>
              </h1>
            </motion.div>

            <div className="text-2xl md:text-3xl font-medium text-slate-600 h-12">
              <AnimatedText text="Cyber Security Engineer" delay={0.5} />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0"
            >
              Passionate about securing digital landscapes and building resilient systems.
              Ready to tackle vulnerabilities and protect data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Contact Me <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Projects
                </Button>
              </Link>
              {/* Social Icons */}
              <div className="flex items-center gap-4 ml-4">
                <a href="https://github.com/wolf-eye0" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mx-auto"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Your Profile Image */}
              <img
                src="/images/me.jpg"
                alt="M.Nihad Pc"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-all duration-500"
              />

              {/* Decorative Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Status</p>
                  <p className="text-sm font-bold text-slate-900">Online</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Month Experience", value: "1", delay: 0 },
              { label: "Projects Completed", value: "2", delay: 0.1 },
              { label: "Certificates Earned", value: "2", delay: 0.2 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: stat.delay }}
                className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
