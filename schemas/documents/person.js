export default {
  name: 'person',
  type: 'document',
  title: 'Mennesker',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Navn'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Nettadresse (slug)',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Bilde'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biografi'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
