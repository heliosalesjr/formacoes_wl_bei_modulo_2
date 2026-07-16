import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import MatrizSmart from "@/components/content/MatrizSmart"
import SmartQuiz from "@/components/content/SmartQuiz"
import WhIntro from "@/components/content/WhIntro"
import WhGame from "@/components/content/WhGame"

export default function FerramentasContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <FadeInWhenVisible>
            <MatrizSmart />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <SmartQuiz />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <WhIntro />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <WhGame />
          </FadeInWhenVisible>

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/encerramento">Próxima Página: Encerramento</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
