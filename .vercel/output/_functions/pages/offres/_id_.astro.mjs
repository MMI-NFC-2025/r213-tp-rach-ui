import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { f as getOffre, $ as $$Layout } from '../../chunks/Backend_Dw6anFs5.mjs';
import { $ as $$PbImages } from '../../chunks/PbImages_nDwH8BDN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const offre = await getOffre(id);
  if (!offre) {
    return Astro2.redirect("/offres");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `${offre.nomMaison} \u2014 ImmoPlus` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/offres" class="text-sm text-slate-600 hover:text-blue-600 mb-6 inline-block">← Retour aux offres</a> <div class="bg-white border border-slate-200 rounded-lg overflow-hidden"> <div class="relative"> ${renderComponent($$result2, "PbImages", $$PbImages, { "record": offre, "recordImage": "Images" })} <button class="favoriteButton absolute top-3 right-3 bg-white rounded-full p-2 shadow"${addAttribute(JSON.stringify(offre), "data-offre")}> <img class="favorite-icon w-7 h-7"${addAttribute(offre.favori ?? false ? "/icons/favorite_filled.svg" : "/icons/favorite.svg", "src")} alt="favori"> </button> </div> <div class="p-6"> <h1 class="text-2xl font-bold text-slate-900 mb-2"> ${offre.nomMaison} </h1> <p class="text-2xl font-bold text-blue-600 mb-4"> ${offre.Prix != null ? Number(offre.Prix).toLocaleString("fr-FR") : "\u2014"} €
</p> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 text-sm text-slate-700"> <div class="bg-slate-50 rounded p-3"> <p class="text-slate-400 text-xs mb-1">Chambres</p> <p class="font-semibold">${offre.nbChambres}</p> </div> <div class="bg-slate-50 rounded p-3"> <p class="text-slate-400 text-xs mb-1">Salles de bain</p> <p class="font-semibold">${offre.nbSdb}</p> </div> </div> <p class="text-slate-600">${offre.Adresse}</p> </div> </div> ` })} ${renderScript($$result, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/[id].astro", void 0);

const $$file = "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/offres/[id].astro";
const $$url = "/offres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
