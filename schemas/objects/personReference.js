export default {
  name: 'personReference',
  type: 'object',
  title: 'Menneske',
  fields: [
    {
      name: 'person',
      type: 'reference',
      to: [
        {
          type: 'person'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'person.name',
      media: 'person.image.asset'
    }
  }
}
