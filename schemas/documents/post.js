import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel',
      description: 'Titler skal være fengende, beskrivende, ikke for lange og ha litt 🦄'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Nettadresse (slug)',
      description:
        'Noen fronter vil kreve en "snegle" for å kunne vise innlegget',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publiseringstid',
      description: 'Kan brukes for å planlegge artikler'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Heltebilde 🦸‍'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Ingress',
      description:
        'Dette ender på sammendragssider, på Google, når folk deler innlegget ditt i sosiale medier.'
    },
    {
      name: 'authors',
      title: 'Forfattere',
      type: 'array',
      of: [
        {
          type: 'personReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Kategorier',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Innhold'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM');
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      };
    }
  }
};
