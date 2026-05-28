"use client"

import { motion } from "framer-motion"
import { Code, Coffee, Lightbulb, Heart, Eye, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
]

const interests = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern technologies",
  },
  {
    icon: Heart,
    title: "Tech for Good",
    description: "Using technology to solve real-world problems and help communities",
  },
  { icon: Lightbulb, title: "Innovation", description: "Creating solutions that make a positive impact on society" },
  { icon: Coffee, title: "Continuous Learning", description: "Always exploring new technologies and best practices" },
]

export default function AboutSection() {
  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Abhishek_Dwivedi_Resume.pdf"
    link.click()
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/myphoto.png-6689WasjUxGzvgKlxGtQtipdwznaW6.jpeg"
                  alt="Abhishek Dwivedi working on projects"
                  className="w-full h-auto object-cover"
                  style={{
                    aspectRatio: "4/5",
                    objectPosition: "center 40%",
                    minHeight: "400px",
                  }}
                  onError={(e) => {
                    console.log("About image failed to load")
                    e.currentTarget.style.display = "none"
                  }}
                  onLoad={(e) => {
                    console.log("About image loaded successfully")
                    e.currentTarget.style.display = "block"
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 sm:p-6 rounded-2xl">
                <div className="text-xl sm:text-2xl font-bold">2+</div>
                <div className="text-xs sm:text-sm">Years Learning</div>
              </div>
            </div>

            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleViewResume}
                variant="outline"
                className="flex-1 sm:flex-none min-h-[44px] bg-transparent"
                aria-label="View resume in new tab"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Resume
              </Button>
              <Button
                onClick={handleDownloadResume}
                className="flex-1 sm:flex-none bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 min-h-[44px]"
                aria-label="Download resume PDF"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "3+", label: "Projects" },
                { number: "2", label: "Startups Founded" },
                { number: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-xl sm:text-2xl font-bold text-blue-500">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Hi there! I'm Abhishek 👋</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate B.Tech Computer Science student at Dr. A.P.J. Abdul Kalam Technical University (AKTU),
                currently in my journey from 2023-2027. I'm deeply passionate about creating scalable web applications
                and using technology for good to solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a founder of HelpingHands (a crowdfunding platform) and Pennyfy (a personal finance tracker), I
                believe in building solutions that make a positive impact on people's lives. I'm currently working as a
                Web Development Intern at Pinnacle Labs, where I'm gaining hands-on experience with modern web
                technologies.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400 rounded-full text-sm border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-lg font-semibold mb-4">What drives me</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4">
                        <interest.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mb-2" />
                        <h5 className="font-semibold mb-1 text-sm sm:text-base">{interest.title}</h5>
                        <p className="text-xs sm:text-sm text-muted-foreground">{interest.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
