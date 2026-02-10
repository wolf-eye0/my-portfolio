import { motion } from "motion/react";
import { Award, Calendar, ExternalLink, Download } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Certificates() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const certificates = [
    {
      id: 1,
      title: "Internship on Cyber Security",
      issuer: "Digital University Kerala (DUK) & KSAAC",
      date: "June 2025",
      image: "/images/DUK_Internship_Cert.jpg", // Confirmed path
      link: "#",
    },
    {
      id: 2,
      title: "Galactic Problem Solver",
      issuer: "NASA International Space Apps Challenge",
      date: "October 2025",
      image: "/images/NASA_SPACE_APP_CERT.jpg", // Confirmed path
      link: "#",
    },
    // Add more blocks if needed!
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
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl"
            >
              <Award className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Certifications & Achievements
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            My professional certifications and learning achievements that demonstrate my
            commitment to continuous growth and expertise.
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{ y: -10, rotateY: flipped === index ? 180 : 5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setFlipped(flipped === index ? null : index)}
                className="cursor-pointer"
              >
                <Card className="h-full hover:shadow-2xl transition-shadow group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                      {/* Animated background pattern */}
                      <motion.div
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />

                      <motion.div
                        initial={{ rotate: 0, scale: 1 }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-4 right-4"
                      >
                        <div className={`p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-md`}>
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ImageWithFallback
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-32 object-contain relative z-10"
                        />
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-xl mb-2 group-hover:text-blue-600 transition-colors"
                    >
                      {cert.title}
                    </motion.h3>

                    <p className="text-slate-600 mb-1">{cert.issuer}</p>

                    <div className="flex items-center text-sm text-slate-500 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>

                    <motion.div className="flex gap-2">
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Verify
                      </motion.a>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 flex-1"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </motion.button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"
            />

            <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
              {[
                { label: "Total Certifications", value: "10+", delay: 0 },
                { label: "Hours of Learning", value: "500+", delay: 0.1 },
                { label: "Skills Validated", value: "15+", delay: 0.2 },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay }}
                  whileHover={{ scale: 1.1, y: -5 }}
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
                    className="text-4xl md:text-5xl mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
