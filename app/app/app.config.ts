export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc',
    },
  },
  uiPro: {
    contentNavigation: {
      slots: {
        linkLeadingIcon: 'size-4 mr-1',
        listWithChildren: 'border-(--ui-bg-elevated)',
        linkTrailing: 'hidden',
      },
      variants: {
        active: {
          false: {
            link: 'text-toned hover:after:bg-accented',
          },
        },
      },
      defaultVariants: {
        variant: 'link',
      },
    },
    pageLinks: {
      slots: {
        linkLeadingIcon: 'size-4',
        linkLabelExternalIcon: 'size-2.5',
      },
    },
  },
})
