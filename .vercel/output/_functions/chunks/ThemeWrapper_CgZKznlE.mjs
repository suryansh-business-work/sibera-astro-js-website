import { c as createComponent, b as createAstro, d as defineStyleVars, m as maybeRenderHead, a as addAttribute, e as renderSlot, r as renderTemplate } from './astro/server_DxVpntjF.mjs';
import { g as getThemeByCategory } from './Page_DeKniRRT.mjs';
/* empty css                          */
import 'clsx';

const $$Astro = createAstro();
const $$ThemeWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThemeWrapper;
  const { category } = Astro2.props;
  const theme = getThemeByCategory(category);
  const $$definedVars = defineStyleVars([{
    "theme-bg": theme.backgroundColor,
    "theme-primary": theme.primaryColor,
    "theme-text": theme.textColor
  }]);
  return renderTemplate`${maybeRenderHead()}<div class="theme-wrapper" data-astro-cid-6j5amoua${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/ThemeWrapper.astro", void 0);

export { $$ThemeWrapper as $ };
