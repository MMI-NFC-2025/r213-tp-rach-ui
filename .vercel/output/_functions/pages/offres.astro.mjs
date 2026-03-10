import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { d as getOffres, h as filterByPrix, $ as $$Layout } from '../chunks/Backend_Dw6anFs5.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_DCL74Y83.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let offres = await getOffres();
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const minPrix = Number(formData.get("minPrix"));
    const maxPrix = Number(formData.get("maxPrix"));
    offres = await filterByPrix(minPrix, maxPrix);
    message = `${offres.length} offre(s) trouv\xE9e(s) entre ${minPrix.toLocaleString("fr-FR")} \u20AC et ${maxPrix.toLocaleString("fr-FR")} \u20AC`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Offres \u2014 ImmoPlus" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-between mb-6"> <h1 class="text-2xl font-bold text-slate-900">Toutes les offres</h1> <a href="/offres/add" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">➕ Ajouter offre</a> </div> <div class="flex flex-wrap gap-3 mb-6"> <a href="/offres/favoris" class="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm hover:bg-pink-200 transition-colors">❤️ Favoris</a> <a href="/offres/surface" class="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm hover:bg-green-200 transition-colors">📐 Surface &gt; 50m²</a> <a href="/offres/prix" class="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm hover:bg-yellow-200 transition-colors">💰 &lt; 100 000 €</a> </div> <form method="POST" class="flex flex-wrap gap-3 items-end mb-6 p-4 bg-white border border-slate-200 rounded-lg"> <div class="flex flex-col gap-1"> <label for="minPrix" class="text-sm text-slate-600">Prix min (€)</label> <input type="number" id="minPrix" name="minPrix" min="0" class="border border-slate-300 rounded px-3 py-2 text-sm w-36" placeholder="0"> </div> <div class="flex flex-col gap-1"> <label for="maxPrix" class="text-sm text-slate-600">Prix max (€)</label> <input type="number" id="maxPrix" name="maxPrix" min="0" class="border border-slate-300 rounded px-3 py-2 text-sm w-36" placeholder="500000"> </div> <button type="submit" class="bg-slate-800 text-white px-4 py-2 rounded text-sm hover:bg-slate-700 transition-colors">Filtrer</button> </form> ${message && renderTemplate`<p class="mb-4 text-slate-600 text-sm">${message}</p>`}<p class="text-slate-500 text-sm mb-4">${offres.length} offre(s)</p> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div> ` })}
} }); });`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/index.astro", void 0);

const $$file = "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/index.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
