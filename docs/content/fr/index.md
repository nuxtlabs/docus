---
seo:
  title: Rédigez une documentation magnifique avec Markdown
  description: Publiez rapidement une documentation flexible et optimisée pour le SEO avec un design magnifique prêt à l'emploi. Docus réunit le meilleur de l'écosystème Nuxt. Propulsé par Nuxt UI Pro.
---

::u-page-hero
#title
Rédigez une documentation magnifique avec Markdown

#description
Publiez rapidement une documentation flexible et optimisée pour le SEO avec un design magnifique prêt à l'emploi.

Docus réunit le meilleur de l'écosystème Nuxt dans un seul CLI.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /fr/getting-started/installation
  trailing-icon: i-lucide-arrow-right
  ---
  Commencer
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons-github
  size: xl
  to: https://github.com/nuxtlabs/docus
  variant: outline
  ---
  Étoile sur GitHub
  :::

#headline
  :::u-button
  ---
  size: sm
  to: https://content.nuxt.com/blog/docus-v3
  variant: outline
  ---
  Docus, le retour →
  :::
::

::u-page-section
  :::u-page-grid
    ::::u-page-card
    ---
    spotlight: true
    class: group col-span-2 lg:col-span-1
    target: _blank
    to: https://nuxt.com
    ---
      :::::floating-nuxt
      :::::
    
    #title
    Construit avec [Nuxt 3]{.text-primary}
    
    #description
    Optimisé par le framework Vue le plus célèbre. Docus vous donne tout ce dont vous avez besoin pour créer des sites rapides, performants et optimisés pour le SEO.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    to: https://ui.nuxt.com/pro
    ---
      :::::u-color-mode-image
      ---
      height: 320
      width: 859
      alt: Magnifique visuel propulsé par UI Pro
      class: w-full h-80 object-cover rounded-lg
      dark: /landing/dark/templates-ui-pro.webp
      light: /landing/light/templates-ui-pro.webp
      ---
      :::::
    
    #title
    Propulsé par [Nuxt UI Pro]{.text-primary}
    
    #description
    Magnifique dès l'installation, minimaliste par conception mais hautement personnalisable. Docus exploite Nuxt UI Pro pour vous offrir la meilleure expérience d'écriture de documentation sans boilerplate, concentrez-vous simplement sur votre contenu.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::tabs
        ::::::tabs-item{.mt-5 icon="i-lucide-eye" label="Aperçu"}
          :::::::div{.flex.flex-col.gap-4}
            ::::::::note{.my-0}
            Voici des informations supplémentaires pour vous.
            :::::::: 
          
            ::::::::tip{.my-0}
            Voici une suggestion utile.
            :::::::: 
          
            ::::::::warning{.my-0}
            Faites attention à cette action car elle pourrait avoir des résultats inattendus.
            :::::::: 
          
            ::::::::caution{.my-0}
            Cette action est irréversible.
            :::::::: 
          :::::::
        ::::::
      
        ::::::tabs-item
        ---
        class: mt-5 mb-2 text-xs overflow-x-auto
        icon: i-lucide-code
        label: Code
        ---
        ```mdc
        ::note
        Voici des informations supplémentaires.
        ::
        
        ::tip
        Voici une suggestion utile.
        ::
        
        ::warning
        Faites attention à cette action car elle pourrait avoir des résultats inattendus.
        ::
        
        ::caution
        Cette action est irréversible.
        ::
        ```
        ::::::
      :::::
    
    #title
    Syntaxe Markdown améliorée par [Nuxt Content]{.text-primary}
    
    #description
    La seule chose dont vous devez vous soucier est d'écrire votre contenu. Rédigez vos pages en Markdown et étendez-les avec la syntaxe MDC pour intégrer Nuxt UI ou des composants Vue personnalisés. La structure, le routage et le rendu sont gérés pour vous.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1
    target: _blank
    ---
      :::::div{.bg-elevated.rounded-lg.p-3.overflow-x-auto}
      ```ts [app.config.ts]
      export default defineAppConfig({
        ui: {
          colors: {
            primary: 'green',
            secondary: 'sky',
          },
        },
        socials: {
          x: 'https://x.com/nuxt_js',
          nuxt: 'https://nuxt.com'
        }
      })
      ```
      :::::
    
    #title
    Personnalisez avec [Nuxt App Config]{.text-primary}
    
    #description
    Mettez à jour les couleurs, les liens sociaux, les logos d'en-tête et les styles de composants globalement via le `app.config.ts`, sans modification directe du code.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1 min-h-[450px]
    target: _blank
    ---
      :::::color-mode-switch
      :::::
    
    #title
    Mode [Nuxt Color]{.text-primary}
    
    #description
    Mode sombre intégré fourni, aucune configuration requise.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::u-color-mode-image
      ---
      height: 554
      width: 859
      alt: Navigation intégrée et recherche plein texte
      class: rounded-lg
      dark: /landing/dark/command-menu.png
      format: webp
      light: /landing/light/command-menu.png
      loading: lazy
      ---
      :::::
    
    #title
    Navigation intégrée et [recherche plein texte]{.text-primary}
    
    #description
    Concentrez-vous uniquement sur l'organisation de votre contenu, Docus gère la modale de recherche et génère automatiquement la navigation latérale pour vous.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::browser-frame
      :video{.rounded-md controls loop playsinline src="https://res.cloudinary.com/nuxt/video/upload/v1747230893/studio/wzt9zfmdvk7hgmdx3cnt.mp4"}
      :::::
    
    #title
    Collaborez sur [Nuxt Studio]{.text-primary}
    
    #description
    Rédigez et gérez votre contenu visuellement, sans aucune connaissance de Markdown requise. Laissez vos collègues non techniques collaborer sur la documentation et intégrer des composants Vue sans compétences en code.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    target: _blank
    to: https://image.nuxt.com/
    ---
      :::::div{.flex-1.flex.items-center.justify-center}
        ::::::u-color-mode-image
        ---
        alt: Visuel Nuxt Image
        class: w-[30%] lg:w-[70%] my-12 lg:my-0
        dark: /landing/dark/nuxt-image.svg
        light: /landing/light/nuxt-image.svg
        ---
        ::::::
      :::::
    
    #title
    Optimisation [Nuxt Image]{.text-primary}
    
    #description
    Docus convertit automatiquement les images Markdown pour utiliser `<NuxtImg>`.
    ::::
  :::
::
