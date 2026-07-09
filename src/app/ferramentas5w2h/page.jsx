import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Ferramentas5w2hContentSection from "@/components/Ferramentas5w2hContentSection"

export default function Ferramentas5w2h() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Ferramentas 5W2H"
          subtitle="Explore a ferramenta 5W2H para planejamento de ações"
          tag="Módulo 2"
        />
        <Ferramentas5w2hContentSection />
      </main>
      <Footer />
    </div>
  )
}
