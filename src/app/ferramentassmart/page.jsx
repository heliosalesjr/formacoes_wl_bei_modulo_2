import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import FerramentasSmartContentSection from "@/components/FerramentasSmartContentSection"

export default function FerramentasSmart() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Ferramentas SMART"
          subtitle="Explore a ferramenta SMART para definição de objetivos"
          tag="Módulo 2"
        />
        <FerramentasSmartContentSection />
      </main>
      <Footer />
    </div>
  )
}
