import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import MatrizIntro from "@/components/content/MatrizIntro"
import Matriz2 from "@/components/content/Matriz2"
import Matriz5 from "@/components/content/Matriz5"

export default function MatrizHabilidadesContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <FadeInWhenVisible>
            <MatrizIntro />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Matriz2 />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Matriz5 />
          </FadeInWhenVisible>

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/ferramentassmart">Próxima Página: Ferramentas SMART</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
