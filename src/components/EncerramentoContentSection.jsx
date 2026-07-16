import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import EncerramentoIntro from "@/components/content/EncerramentoIntro"
import EncerramentoAprendi from "@/components/content/EncerramentoAprendi"
import EncerramentoQuizModulo2 from "@/components/content/EncerramentoQuizModulo2"

export default function EncerramentoContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <FadeInWhenVisible>
            <EncerramentoIntro />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <EncerramentoQuizModulo2 />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <EncerramentoAprendi />
          </FadeInWhenVisible>

        </div>
      </div>
    </section>
  )
}
