"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export function Process() {
  return (
    <section id="processo" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nosso Processo Ágil</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seguimos nossa maneira de entregar nossos valores de flexibilidade e escalabilidade
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <Card className="bg-background border-border/20 hover:bg-background/80 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-foreground">Planejamento</h3>
                  <Badge className="bg-primary">01</Badge>
                </div>
                <p className="text-muted-foreground">
                  Planejamento abrangente do projeto para definir escopo, cronograma e recursos necessários para o
                  sucesso.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-background border-border/20 hover:bg-background/80 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-foreground">Definindo a Experiência do Usuário</h3>
                  <Badge className="bg-primary">02</Badge>
                </div>
                <p className="text-muted-foreground">
                  Criação de experiências de usuário intuitivas e envolventes através de design cuidadoso.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-background border-border/20 hover:bg-background/80 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-foreground">Fundações Técnicas</h3>
                  <Badge className="bg-primary">03</Badge>
                </div>
                <p className="text-muted-foreground">
                  Construção de arquitetura robusta e infraestrutura técnica para suportar sua solução.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-background border-border/20 hover:bg-background/80 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-foreground">Implementação</h3>
                  <Badge className="bg-primary">04</Badge>
                </div>
                <p className="text-muted-foreground">
                  Desenvolvimento ágil com sprints regulares e integração contínua para código de qualidade.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-background border-border/20 hover:bg-background/80 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-foreground">Ciclo de Feedback</h3>
                  <Badge className="bg-primary">05</Badge>
                </div>
                <p className="text-muted-foreground">
                  Testes iterativos e refinamento com base no feedback do cliente para garantir a satisfação.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-background border-border/20 hover:bg-background/80 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-foreground">Lançamento</h3>
                  <Badge className="bg-primary">06</Badge>
                </div>
                <p className="text-muted-foreground">
                  Implantação tranquila e suporte contínuo para garantir que sua solução prospere em produção.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
