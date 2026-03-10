import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { P as PrixInferieur, $ as $$Layout } from '../../chunks/Backend_Dw6anFs5.mjs';
import { $ as $$OffreCard } from '../../chunks/OffreCard_DCL74Y83.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const offres = await PrixInferieur();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Maisons < 100 000 \u20AC \u2014 ImmoPlus" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-between mb-6"> <h1 class="text-2xl font-bold text-slate-900">
Maisons à moins de 100 000 €
</h1> <a href="/offres" class="text-sm text-slate-600 hover:text-blue-600">← Retour aux offres</a> </div> <p class="text-slate-500 text-sm mb-4">${offres.length} offre(s)</p> <div class="overflow-x-auto pb-4"> <div class="flex gap-4" style="width: max-content;"> ${offres.map((offre) => renderTemplate`<div class="w-96 flex-shrink-0"> ${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })} </div>`)} </div> </div> ` })}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/prix/index.astro", void 0);

const $$file = "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/prix/index.astro";
const $$url = "/offres/prix";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
