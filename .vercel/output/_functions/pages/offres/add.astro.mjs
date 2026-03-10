import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { c as addOffre, $ as $$Layout } from '../../chunks/Backend_Dw6anFs5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  let success = false;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const result = await addOffre(Object.fromEntries(formData));
    message = result.message;
    success = result.success;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Ajouter une offre \u2014 ImmoPlus" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-lg mx-auto"> <h1 class="text-2xl font-bold text-slate-900 mb-6">
Ajouter une offre
</h1> ${message && renderTemplate`<div${addAttribute(`mb-4 px-4 py-3 rounded text-sm ${success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, "class")}> ${message} </div>`} <form method="POST" enctype="multipart/form-data" class="flex flex-col gap-4 bg-white p-6 border border-slate-200 rounded-lg"> <div class="flex flex-col gap-1"> <label for="nomMaison" class="text-sm font-medium text-slate-700">Nom de la maison</label> <input type="text" id="nomMaison" name="nomMaison" required class="border border-slate-300 rounded px-3 py-2 text-sm"> </div> <div class="flex flex-col gap-1"> <label for="prix" class="text-sm font-medium text-slate-700">Prix (€)</label> <input type="number" id="prix" name="prix" min="0" required class="border border-slate-300 rounded px-3 py-2 text-sm"> </div> <div class="flex flex-col gap-1"> <label for="nbSdb" class="text-sm font-medium text-slate-700">Nombre de salles de bain</label> <input type="number" id="nbSdb" name="nbSdb" min="0" required class="border border-slate-300 rounded px-3 py-2 text-sm"> </div> <div class="flex flex-col gap-1"> <label for="nbChambres" class="text-sm font-medium text-slate-700">Nombre de chambres</label> <input type="number" id="nbChambres" name="nbChambres" min="0" required class="border border-slate-300 rounded px-3 py-2 text-sm"> </div> <div class="flex flex-col gap-1"> <label for="surface" class="text-sm font-medium text-slate-700">Surface (m²)</label> <input type="number" id="surface" name="surface" min="0" step="0.1" required class="border border-slate-300 rounded px-3 py-2 text-sm"> </div> <div class="flex flex-col gap-1"> <label for="images" class="text-sm font-medium text-slate-700">Images</label> <input type="file" id="images" name="images" accept="image/*" multiple class="border border-slate-300 rounded px-3 py-2 text-sm"> </div> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium">Ajouter l'offre</button> </form> <a href="/offres" class="mt-4 inline-block text-sm text-slate-600 hover:text-blue-600">← Retour aux offres</a> </div> ` })}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/add.astro", void 0);

const $$file = "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/add.astro";
const $$url = "/offres/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
