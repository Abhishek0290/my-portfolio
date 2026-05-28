"use client"

import { motion } from "framer-motion"
import { Code, Server, Wrench, Palette, Database, Cloud, Smartphone, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
    ],
  },
]

const tools = [
  { name: "VS Code", icon: Code },
  { name: "Git", icon: GitBranch },
  { name: "Figma", icon: Palette },
  { name: "Postman", icon: Server },
  { name: "AWS", icon: Cloud },
  { name: "React Native", icon: Smartphone },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
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
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
              >
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Tools I Love</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 bg-muted rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 transition-all duration-300 cursor-pointer group"
              >
                <tool.icon className="h-8 w-8 mb-2 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Stats Heatmap Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">GitHub Activity</h3>
          <div className="bg-muted rounded-2xl p-8">
            <div className="grid grid-cols-7 gap-1 max-w-4xl mx-auto">
              {Array.from({ length: 365 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1, delay: index * 0.001 }}
                  viewport={{ once: true }}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.7
                      ? "bg-green-500"
                      : Math.random() > 0.5
                        ? "bg-green-300"
                        : Math.random() > 0.3
                          ? "bg-green-200"
                          : "bg-muted-foreground/20"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">365 days of coding contributions</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
