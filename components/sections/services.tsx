"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Code, Lightbulb, BarChart3 } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções abrangentes de software adaptadas às necessidades do seu negócio
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <Card className="bg-card border-border/20 hover:bg-card/80 transition-colors group h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                  <Code className="text-muted-foreground h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Engenharia de Produtos</h3>
                <p className="text-muted-foreground mb-4">
                  Desenvolvimento completo de produtos de software personalizados, do conceito à implantação.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-card border-border/20 hover:bg-card/80 transition-colors group h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                  <Lightbulb className="text-muted-foreground h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Arquitetura de Soluções</h3>
                <p className="text-muted-foreground mb-4">
                  Projetamos arquiteturas escaláveis, seguras e resilientes para aplicações modernas em ambientes críticos.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-card border-border/20 hover:bg-card/80 transition-colors group h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                  <BarChart3 className="text-muted-foreground h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Consultoria Tecnológica</h3>
                <p className="text-muted-foreground mb-4">
                  Orientação estratégica sobre decisões tecnológicas para otimizar os resultados do seu negócio.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
