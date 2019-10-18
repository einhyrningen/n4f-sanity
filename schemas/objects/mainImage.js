export default {
  name: 'mainImage',
  type: 'image',
  title: 'Bilde',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'position',
      type: 'string',
      title: 'Posisjon',
      description: 'Gjelder bare bilder i artikler, ikke hovedbilder.',
      options: {
        isHighlighted: true,
        list: [
          {
            title: 'Midtstilt',
            value: 'center'
          },
          {
            title: 'Midtstilt stor',
            value: 'center-large'
          },
          {
            title: 'Venstrestilt',
            value: 'left'
          },
          {
            title: 'Høyrestilt',
            value: 'right'
          }
        ]
      }
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Bildetekst',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ tekst',
      description: 'Viktig for SEO and universell utforming.',
      validation: Rule =>
        Rule.error('Du må fylle inn alternativ tekst.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
};
