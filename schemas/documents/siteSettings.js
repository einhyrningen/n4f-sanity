export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Innstillinger',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Adresse'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telefonnummer'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Metabeskrivelse',
      description: 'Brukes av søkemotorer.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Nøkkelord',
      description: 'Legg til nøkkelord som beskriver Hyperion.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ]
};
