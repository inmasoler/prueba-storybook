import"./iframe-BMKrC5xt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-GO7GDrc_.js";const n=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};n.isAstroComponentFactory=!0;n.moduleId="C:/Users/inmac/Documents/storybook_pruebas/src/src/components/actions/Button.astro";const c={title:"Actions/Button",component:n,parameters:{layout:"centered",renderer:"astro",docs:{description:{component:"\nLas clases Tailwind se construyen en **servidor** dentro de `Button.astro` (`base` + `variants[variant]` + props).  \nEl panel **Code** de Storybook muestra el **archivo de historia** (args en CSF), **no** el HTML final ni la cadena de `class` resuelta. No es un fallo de Astro: el snippet de código documenta *cómo usas* el componente, no el resultado del compilador.\n\n**Dónde ver las clases aplicadas:** inspecciona el `<button>` o `<a>` en el iframe (DevTools del navegador), o cambia args en **Controles** y vuelve a inspeccionar.\n\n### Variantes → clases Tailwind (capa variante; además va el `base` común)\n\n| `variant` | Clases |\n|-------------|--------|\n| `primary` | `bg-action hover:bg-action-hover text-action-text border-none` |\n| `outline` | `bg-transparent hover:bg-white/10 text-text-inverse border border-text-inverse/25` |\n| `dark` | `bg-surface-deep hover:bg-surface-emphasis text-text-inverse border-none` |\n\n**Base común:** `inline-flex items-center justify-center font-body text-sm font-bold rounded-lg cursor-pointer transition-colors uppercase tracking-widest px-7 py-3.5`  \n**Opcional:** `fullWidth` → `w-full`; `class` (prop) se concatena al final.\n".trim()}}}},e={args:{variant:"primary",slots:{default:"Primary"}}},r={args:{variant:"outline",slots:{default:"Outline"}},parameters:{backgrounds:{default:"surfaceEmphasis"}}},a={args:{variant:"dark",slots:{default:"Dark"}}},s={args:{variant:"primary",href:"#",slots:{default:"As link"}}},t={args:{variant:"primary",fullWidth:!0,slots:{default:"Full width"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    slots: {
      default: 'Primary'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    slots: {
      default: 'Outline'
    }
  },
  parameters: {
    /* Inverse text — needs a dark surface to match real pages */
    backgrounds: {
      default: 'surfaceEmphasis'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    slots: {
      default: 'Dark'
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: '#',
    slots: {
      default: 'As link'
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    fullWidth: true,
    slots: {
      default: 'Full width'
    }
  }
}`,...t.parameters?.docs?.source}}};const d=["Primary","Outline","Dark","AsLink","FullWidth"];export{s as AsLink,a as Dark,t as FullWidth,r as Outline,e as Primary,d as __namedExportsOrder,c as default};
