"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, GraduationCap, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    type: "work",
    title: "Web Development Intern",
    company: "Pinnacle Labs",
    location: "Remote",
    period: "Aug 2025 - Present",
    description:
      "Working on modern web technologies to build scalable solutions. Gaining hands-on experience with full-stack development and contributing to real-world projects.",
    achievements: [
      "Working with modern web technologies",
      "Building scalable web solutions",
      "Collaborating with experienced developers",
    ],
    technologies: ["React", "Node.js", "JavaScript", "Web Development"],
    hasOfferLetter: true,
  },
  {
    type: "work",
    title: "Founder",
    company: "HelpingHands (Together We Can!)",
    location: "India",
    period: "2024 - Present",
    description:
      "Building a crowdfunding website with live donation tracking, similar to Milaap. Focused on creating a platform that enables community support and social impact.",
    achievements: [
      "Developed full-stack crowdfunding platform",
      "Implemented live donation tracking system",
      "Created user-friendly donation interface",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    type: "work",
    title: "Founder",
    company: "Pennyfy (Your Finance Buddy)",
    location: "India",
    period: "2024 - Present",
    description:
      "Developing a personal finance tracker web & mobile application to help users manage their expenses and achieve financial goals.",
    achievements: [
      "Designing intuitive finance tracking interface",
      "Building cross-platform compatibility",
      "Implementing data visualization features",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
]

const education = [
  {
    type: "education",
    title: "Bachelor of Technology in Computer Science & Engineering",
    company: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    location: "Uttar Pradesh, India",
    period: "2023 - 2027",
    description:
      "Currently pursuing B.Tech in Computer Science with focus on Full-Stack Development and Software Engineering.",
    achievements: [
      "Active in hackathons and coding competitions",
      "Building real-world projects",
      "Learning modern web technologies",
    ],
    technologies: ["Java", "Python", "Data Structures", "Algorithms"],
  },
  {
    type: "education",
    title: "Class 12 (ICSE)",
    company: "The Chintels School",
    location: "India",
    period: "2023",
    description: "Completed higher secondary education with focus on Science and Mathematics.",
    achievements: ["Strong foundation in Mathematics and Science", "Developed problem-solving skills"],
    technologies: ["Mathematics", "Physics", "Chemistry"],
  },
]

const allItems = [...experiences, ...education].sort((a, b) => {
  const yearA = Number.parseInt(a.period.split(" - ")[0])
  const yearB = Number.parseInt(b.period.split(" - ")[0])
  return yearB - yearA
})

export default function ExperienceSection() {
  const handleViewOfferLetter = () => {
    window.open(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offerletter.png.jpg-DYhZEvJ01tk9pI2QAQMHuEFSCp4DqK.jpeg",
      "_blank",
    )
  }

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Professional experience and educational background</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {item.type === "work" ? (
                            <Building className="h-5 w-5 text-blue-500" />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-purple-500" />
                          )}
                          <Badge variant={item.type === "work" ? "default" : "secondary"}>
                            {item.type === "work" ? "Work" : "Education"}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.period}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                      <div className="flex items-center text-muted-foreground mb-3">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{item.company}</span>
                        <MapPin className="h-4 w-4 ml-4 mr-1" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-muted-foreground mb-4">{item.description}</p>

                      {/* Offer Letter Button */}
                      {(item as any).hasOfferLetter && (
                        <div className="mb-4">
                          <Button
                            onClick={handleViewOfferLetter}
                            variant="outline"
                            size="sm"
                            className="hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Offer Letter
                          </Button>
                        </div>
                      )}

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
