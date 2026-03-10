import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import 'clsx';
import { i as getImageUrl } from './Backend_Dw6anFs5.mjs';

const $$Astro = createAstro();
const $$PbImages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PbImages;
  const { record, recordImage = "Images" } = Astro2.props;
  const url = getImageUrl(record, recordImage);
  return renderTemplate`${url ? renderTemplate`${maybeRenderHead()}<img${addAttribute(url, "src")}${addAttribute(record.nomMaison, "alt")} class="w-full h-48 object-cover rounded-t-lg">` : renderTemplate`<div class="w-full h-48 bg-slate-200 rounded-t-lg flex items-center justify-center"><span class="text-slate-400 text-sm">Aucune image</span></div>`}`;
}, "C:/Users/rachi/Documents/GitHub/r213-tp-rach-ui/src/components/PbImages.astro", void 0);

export { $$PbImages as $ };
