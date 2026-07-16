import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import FerramentasContentSection from "@/components/FerramentasContentSection"

export default function Ferramentas() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Ferramentas de Planejamento"
          subtitle="Explore as ferramentas SMART e 5W2H para planejar metas e ações"
          tag="Módulo 2"
        />
        <FerramentasContentSection />
      </main>
      <Footer />
    </div>
  )
}
