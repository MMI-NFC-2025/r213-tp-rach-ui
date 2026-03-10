import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderComponent, h as addAttribute, l as renderScript, r as renderTemplate } from './astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { $ as $$PbImages } from './PbImages_nDwH8BDN.mjs';

const $$Astro = createAstro();
const $$OffreCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OffreCard;
  const { offre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="offre-card relative border border-slate-200 rounded-lg shadow-sm overflow-hidden bg-white hover:-translate-y-1 transition-transform"> ${renderComponent($$result, "PbImages", $$PbImages, { "record": offre, "recordImage": "Images" })} <button class="favoriteButton absolute top-2 right-2 bg-white rounded-full p-1 shadow"${addAttribute(JSON.stringify(offre), "data-offre")}> <img class="favorite-icon w-6 h-6"${addAttribute(offre.favori ?? false ? "/icons/favorite_filled.svg" : "/icons/favorite.svg", "src")} alt="favori"> </button> <div class="p-4"> <h2 class="font-semibold text-slate-900 text-lg mb-1"> ${offre.nomMaison} </h2> <p class="text-slate-700 font-bold mb-1"> ${offre.Prix != null ? Number(offre.Prix).toLocaleString("fr-FR") : "\u2014"} €
</p> <a${addAttribute(`/offres/${offre.id}`, "href")} class="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition-colors">Voir l'offre</a> </div> </article> ${renderScript($$result, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/components/OffreCard.astro", void 0);

export { $$OffreCard as $ };
