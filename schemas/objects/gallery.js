export default {
  name: 'gallery',
  type: 'object',
  title: 'Bildegalleri',
  fields: [
    {
      title: 'Bilder',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ],
  preview: {
    select: {
      blocks: 'images',
    },
    prepare(value) {
      // console.log(value);
      const block = (value.blocks || []).find(block => block._type === 'image')
      return {
        title: block
          ? `Bildegalleri: ${block.asset._ref}`
          : 'No title'
      }
    }
  }
};
