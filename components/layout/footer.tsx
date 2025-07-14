import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card py-16 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-foreground font-medium">TSALECH Engenharia</span>
              </Link>
            </div>
            <p className="text-muted-foreground mb-4">Transformando Ideias em Histórias de Sucesso em Software</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Engenharia de Produtos
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Arquitetura de Soluções
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Consultoria Tecnológica
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#equipe" className="text-muted-foreground hover:text-foreground transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="#projeto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#processos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Processos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Salvador, Bahia, Brazil</span>
              </li>
              {/* <li>
                <Link
                  href="mailto:contato@monqsoftware.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={16} />
                  <span>monqsoftware@gmail.com</span>
                </Link>
              </li> */}
              <li>
                <Link
                  href="https://wa.me/5571999648913?text=Tenho%20uma%20ideia%20de%20software"
                  target="_blank"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={16} />
                  <span>+55 (71) 9-9964-8913</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">© 2025 TSALECH Engenharia. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link
                href="https://www.termsfeed.com/live/16725834-26e9-4e8a-8958-b35cb49c74c9"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}