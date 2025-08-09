"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "HelpingHands",
    description: "Milaap-style fundraising platform with live donation tracking and community support features",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/helpinghandslogo.png-K6O5XhkMGezhiQfJ0UXZ0FxS9IGnVz.jpeg",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://helping-hands-donation.pages.dev/",
    githubUrl: "https://github.com/Abhishek0290",
    featured: true,
  },
  {
    id: 2,
    title: "Pennyfy",
    description: "Personal finance tracker web & mobile app for better expense management and financial planning",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pennyfylogo.png.jpg-abrmkUN7GIn98iEE6OrD9Vz1zHJI0q.jpeg",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Vite"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "https://github.com/Abhishek0290",
    featured: true,
    status: "In Development",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing my projects and skills with smooth animations",
    image: "/images/portfoliologo.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "https://github.com/Abhishek0290",
    featured: false,
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 px-4">
            A showcase of my recent work and personal projects
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`min-h-[44px] ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    : ""
                }`}
                aria-label={`Filter projects by ${category.label}`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center p-4">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} project screenshot`}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600">
                        Featured
                      </Badge>
                    )}
                    {project.status && <Badge className="absolute top-4 right-4 bg-orange-500">{project.status}</Badge>}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.liveUrl !== "#" ? (
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code`}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    {project.status && (
                      <p className="text-sm text-orange-600 dark:text-orange-400 mb-3 font-medium">
                        In progress — Source on GitHub
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
