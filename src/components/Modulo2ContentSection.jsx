import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Modulo2Intro from "@/components/content/Modulo2Intro"
import Modulo2Objetivos from "@/components/content/Modulo2Objetivos"
import Modulo2Situacao from "@/components/content/Modulo2Situacao"
import Modulo2Passo from "@/components/content/Modulo2Passo"
import Modulo2Content from "@/components/content/Modulo2Content"
import Modulo2PPDA from "@/components/content/Modulo2PPDA"
import Modulo2AoFinal from "@/components/content/Modulo2AoFinal"

export default function Modulo2ContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <FadeInWhenVisible>
            <Modulo2Intro />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Modulo2Objetivos />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Modulo2Situacao />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Modulo2Passo />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Modulo2Content />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Modulo2PPDA />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Modulo2AoFinal />
          </FadeInWhenVisible>
            

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/matrizhabilidades">Próxima Página: Matriz de Habilidades</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
