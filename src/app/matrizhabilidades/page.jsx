import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MatrizHabilidadesContentSection from "@/components/MatrizHabilidadesContentSection"

export default function MatrizHabilidades() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Matriz de Habilidades"
          subtitle="Conheça a matriz de habilidades trabalhada neste módulo"
          tag="Módulo 2"
        />
        <MatrizHabilidadesContentSection />
      </main>
      <Footer />
    </div>
  )
}
