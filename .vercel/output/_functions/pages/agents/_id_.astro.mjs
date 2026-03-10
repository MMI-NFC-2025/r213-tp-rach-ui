import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { g as getAgent, a as getOffresByAgent, $ as $$Layout } from '../../chunks/Backend_Dw6anFs5.mjs';
import { $ as $$OffreCard } from '../../chunks/OffreCard_DCL74Y83.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const agent = await getAgent(id);
  const offres = await getOffresByAgent(agent?.relation ?? []);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": agent ? `Offres de ${agent.prenom.trim()} ${agent.nom.trim()} \u2014 ImmoPlus` : "Agent \u2014 ImmoPlus" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/agents" class="text-sm text-slate-600 hover:text-blue-600 mb-6 inline-block">← Retour aux agents</a> ${agent && renderTemplate`<h1 class="text-2xl font-bold text-slate-900 mb-6">
Offres de ${agent.prenom.trim()} ${agent.nom.trim()} </h1>`}${offres.length === 0 ? renderTemplate`<p class="text-slate-500">Cet agent n'a pas encore d'offres.</p>` : renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div>`}` })}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/agents/[id].astro", void 0);

const $$file = "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/agents/[id].astro";
const $$url = "/agents/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
