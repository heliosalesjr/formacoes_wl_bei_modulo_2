import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import ProjetosContentSection from "@/components/ProjetosContentSection"

export default function Projetos() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Projetos"
          subtitle="Como planejar e as sugestões do livro"
          tag="Módulo 2"
        />
        <ProjetosContentSection />
      </main>
      <Footer />
    </div>
  )
}
