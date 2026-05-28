"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.6}
        roughness={0.1}
        metalness={0.1}
        wireframe={false}
      />
    </mesh>
  )
}

function Fallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
  )
}

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Abhishek_Dwivedi_Resume.pdf"
    link.click()
  }

  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<Fallback />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </Suspense>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95 -z-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          {/* Enhanced Name Display */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative">
              {/* Subtle background elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Main name with enhanced styling */}
              <motion.h1
                variants={itemVariants}
                className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight font-semibold">
                  Abhishek
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 bg-clip-text text-transparent leading-tight font-semibold">
                  Dwivedi
                </span>
              </motion.h1>

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border border-blue-500/30 rounded-full animate-bounce opacity-40"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-50"></div>
              <div
                className="absolute top-1/2 -right-4 w-2 h-2 border border-cyan-400/40 rotate-45 animate-spin opacity-30"
                style={{ animationDuration: "4s" }}
              ></div>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-4 max-w-4xl mx-auto px-4 font-medium"
          >
            Full-Stack Developer | B.Tech CSE @ AKTU
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto px-4"
          >
            Founder @ HelpingHands | Building Pennyfy | Passionate about scalable web applications & tech for good
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 min-h-[44px] shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="View my projects"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90 min-h-[44px]"
                onClick={handleViewResume}
                aria-label="View resume in new tab"
              >
                View Resume
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90 min-h-[44px]"
                onClick={handleDownloadResume}
                aria-label="Download resume PDF"
              >
                Download Resume
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 sm:space-x-6 mb-12 px-4">
            {[
              { icon: Github, href: "https://github.com/Abhishek0290", label: "GitHub Profile" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/abhishek-dwivedi-761b69340",
                label: "LinkedIn Profile",
              },
              { icon: Mail, href: "mailto:abhishekdwi455@gmail.com", label: "Send Email" },
              { icon: MessageCircle, href: "https://wa.me/919984648762", label: "WhatsApp Chat" },
              { icon: Instagram, href: "https://www.instagram.com/abhiishekkk02/", label: "Instagram Profile" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg hover:shadow-xl"
                aria-label={label}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6 text-foreground/60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
