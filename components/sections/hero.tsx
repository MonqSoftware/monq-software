"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([])

  useEffect(() => {
    // Inicializar partículas apenas no lado do cliente
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-full mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Engenharia Digital 
              <br />
              para Soluções de Alto Impacto!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Unimos inovação e excelência para transformar o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-foreground group"
                onClick={() => window.open('https://wa.me/5571999648913?text=Tenho%20uma%20ideia%20de%20software')}
              >
                <span>Vamos Conversar</span>
                <MessageCircle className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = "#projetos"}
                className="border-primary text-foreground hover:bg-accent/20 group"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          <div className="md:w-1/2 flex justify-center">
            <span className="text-4xl md:text-6xl font-bold text-foreground">TSALECH</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
    </section>
  )
}
