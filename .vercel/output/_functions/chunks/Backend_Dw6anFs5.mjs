import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_BhcMEgpZ.mjs';
import 'piccolore';
/* empty css                        */
import 'clsx';
import PocketBase from 'pocketbase';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white border-b border-slate-200"> <div class="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between"> <a href="/" class="text-xl font-bold text-blue-600">ImmoPlus</a> <nav class="flex gap-6 text-sm font-medium text-slate-700"> <a href="/" class="hover:text-blue-600 transition-colors">Accueil</a> <a href="/offres" class="hover:text-blue-600 transition-colors">Offres</a> <a href="/agents" class="hover:text-blue-600 transition-colors">Agents</a> </nav> </div> </header>`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-slate-200 bg-white"> <div class="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-6 text-sm text-slate-600"> <p class="font-semibold text-slate-900">ImmoPlus</p> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} — Tous droits réservés.</p> </div> </footer>`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${titre}</title>${renderHead()}</head> <body class="bg-slate-50 min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1 mx-auto w-full max-w-4xl px-6 py-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/layouts/Layout.astro", void 0);

const pb = new PocketBase("http://127.0.0.1:8090");

function getImageUrl(record, imageField) {
    const file = Array.isArray(record[imageField]) ? record[imageField][0] : record[imageField];
    return file ? pb.files.getURL(record, file) : null;
}

async function getOffres() {
    try { return await pb.collection("maison").getFullList({ sort: "-created" }); }
    catch (error) { return []; }
}

async function getOffre(id) {
    try { return await pb.collection("maison").getOne(id); }
    catch (error) { return null; }
}

async function getOffresSurface50() {
    try { return await pb.collection("maison").getFullList({ sort: "-created" }); }
    catch (error) { return []; }
}

async function PrixInferieur() {
    try { return await pb.collection("maison").getFullList({ filter: "Prix < 100000", sort: "-created" }); }
    catch (error) { return []; }
}

async function addOffre(house) {
    try {
        await pb.collection("maison").create(house);
        return { success: true, message: "Offre ajoutée avec succès" };
    } catch (error) {
        return { success: false, message: "Une erreur est survenue en ajoutant la maison" };
    }
}

async function filterByPrix(minPrix, maxPrix) {
    try { return await pb.collection("maison").getFullList({ filter: `Prix >= ${minPrix} && Prix <= ${maxPrix}`, sort: "-created" }); }
    catch (error) { return []; }
}

async function getAgents() {
    try { return await pb.collection("agent").getFullList({ sort: "-created" }); }
    catch (error) { return []; }
}

async function getAgent(id) {
    try { return await pb.collection("agent").getOne(id); }
    catch (error) { return null; }
}

async function getOffresByAgent(relationIds) {
    if (!relationIds || relationIds.length === 0) return [];
    try {
        const filter = relationIds.map(id => `id = "${id}"`).join(" || ");
        return await pb.collection("maison").getFullList({ filter, sort: "-created" });
    }
    catch (error) { return []; }
}

export { $$Layout as $, PrixInferieur as P, getOffresByAgent as a, getAgents as b, addOffre as c, getOffres as d, getOffresSurface50 as e, getOffre as f, getAgent as g, filterByPrix as h, getImageUrl as i };
