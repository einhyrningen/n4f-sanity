// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import person from './documents/person'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import siteSettings from './documents/siteSettings'
import pressRelease from './documents/pressRelease';
import subsidies from './documents/subsidies';


// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import personReference from './objects/personReference'
import gallery from './objects/gallery'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'n4f',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    pressRelease,
    subsidies,
    siteSettings,
    post,
    page,
    category,
    person,
    mainImage,
    personReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    gallery

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
