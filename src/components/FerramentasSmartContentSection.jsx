import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FerramentasSmartContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/ferramentas5w2h">Próxima Página: Ferramentas 5W2H</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
