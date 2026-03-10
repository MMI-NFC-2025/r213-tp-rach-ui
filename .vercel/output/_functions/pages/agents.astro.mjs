import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { b as getAgents, $ as $$Layout } from '../chunks/Backend_Dw6anFs5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const agents = await getAgents();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Agents \u2014 ImmoPlus" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold text-slate-900 mb-6">Nos agents</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${agents.map((agent) => renderTemplate`<div class="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-2"> <p class="font-semibold text-slate-900"> ${agent.prenom.trim()} ${agent.nom.trim()} </p> <p class="text-slate-500 text-sm">${agent.email}</p> <a${addAttribute(`/agents/${agent.id}`, "href")} class="mt-2 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center">
Voir ses offres
</a> </div>`)} </div> ` })}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/agents/index.astro", void 0);

const $$file = "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/pages/agents/index.astro";
const $$url = "/agents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
