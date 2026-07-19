# useMarkViewedOnVisible

Hook que marca uma seção como "vista" assim que ela entra na viewport,
usando `IntersectionObserver`. Usado neste projeto para acender os
checkmarks de progresso na sidebar (`src/components/Sidebar.jsx`).

## Como funciona

```jsx
import { useMarkViewedOnVisible } from '@/hooks/useMarkViewedOnVisible';

const MinhaSecao = () => {
  const ref = useMarkViewedOnVisible('minha-secao'); // id único da seção

  return (
    <section ref={ref} id="minha-secao">
      ...
    </section>
  );
};
```

O hook devolve um `ref`. Basta anexá-lo ao elemento raiz da seção — o
`id` passado ao hook deve ser o mesmo usado no atributo `id` do
elemento (ou pelo menos o mesmo que a UI de navegação espera).

Assinatura: `useMarkViewedOnVisible(id, threshold = 0.5)`. `threshold`
é a fração do elemento que precisa estar visível para disparar a marca
(0 a 1); o padrão de 0.5 exige metade do elemento na tela.

## Dependência: um contexto de "viewed"

O hook chama `markAsViewed(id)` vindo de `useSidebar()`
(`src/contexts/SidebarContext.js`). Para portar o hook a outro
projeto, leve também esse contexto — ou adapte a chamada para o que o
novo projeto usar. O contrato mínimo que o hook espera do contexto:

```js
const { markAsViewed } = useContext(AlgumContext);
// markAsViewed(id: string) => void
```

Se o projeto novo não tiver (ou não quiser) um contexto assim, dá para
generalizar o hook recebendo o callback como parâmetro em vez de
importar `useSidebar` fixo:

```js
export function useMarkViewedOnVisible(id, onVisible, threshold = 0.5) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onVisible(id),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible, id, threshold]);
  return ref;
}
```

Essa versão não depende de nenhum contexto específico — quem usa o
hook passa a própria função de marcação.

## Checklist para portar para outro projeto

1. Copiar `useMarkViewedOnVisible.js` (versão com contexto fixo ou a
   variante genérica acima, conforme o caso).
2. Garantir que existe um provider de "viewed" no topo da árvore (ou
   passar o callback manualmente, na variante genérica).
3. Em cada seção rastreável: `const ref = useMarkViewedOnVisible(id)`
   e anexar `ref` + `id` ao elemento.
4. Ler o estado de "viewed" onde for preciso (ex.: sidebar, barra de
   progresso) via `isViewed(id)` do mesmo contexto.

## Por que existe

Antes deste hook, cada componente de conteúdo repetia ~15 linhas de
`useRef` + `IntersectionObserver` + `useEffect` só para marcar a seção
como vista. Eram 17 cópias quase idênticas do mesmo bloco
(`src/components/content/*.jsx`). Extrair para um hook elimina a
duplicação e evita que alguém esqueça o cleanup do observer ao criar
uma seção nova.
