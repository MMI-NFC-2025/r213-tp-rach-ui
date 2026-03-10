import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { d as getOffres, $ as $$Layout } from '../chunks/Backend_Dw6anFs5.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_DCL74Y83.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const offres = await getOffres();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Accueil \u2014 ImmoPlus" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-10"> <h1 class="text-4xl font-bold text-slate-900 mb-3">
Bienvenue sur ImmoPlus
</h1> <p class="text-slate-600">
Trouvez la maison de vos rêves
</p> <a href="/offres" class="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Voir toutes les offres</a> </div> <h2 class="text-xl font-semibold text-slate-800 mb-4">Dernières offres</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${offres.slice(0, 3).map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div> ` })}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/index.astro", void 0);

const $$file = "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
