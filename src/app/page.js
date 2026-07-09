import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo2ContentSection from "@/components/Modulo2ContentSection"

export default function Modulo2() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          eyebrow="Curso de Formação"
          title="Módulo 2"
          tag="Módulo 2"
          subtitle="Como planejar aulas e orientar os estudantes nos projetos."
        />
        <Modulo2ContentSection />
      </main>
      <Footer />
    </div>
  )
}
