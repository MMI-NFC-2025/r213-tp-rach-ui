import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { d as getOffres, $ as $$Layout } from '../../chunks/Backend_Dw6anFs5.mjs';
import { $ as $$OffreCard } from '../../chunks/OffreCard_DCL74Y83.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const offres = await getOffres();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Favoris \u2014 ImmoPlus" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-between mb-6"> <h1 class="text-2xl font-bold text-slate-900">❤️ Favoris</h1> <a href="/offres" class="text-sm text-slate-600 hover:text-blue-600">← Retour aux offres</a> </div> <p id="favCount" class="text-slate-500 text-sm mb-4"></p> <p id="emptyMsg" class="hidden text-slate-500">Aucun favori pour l'instant.</p> <div id="favGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div> ` })} ${renderScript($$result, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/favoris/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/favoris/index.astro", void 0);

const $$file = "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/favoris/index.astro";
const $$url = "/offres/favoris";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
