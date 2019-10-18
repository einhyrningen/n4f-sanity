import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import GoPin from 'react-icons/lib/go/pin'
import MdContentCopy from 'react-icons/lib/md/content-copy'
import GoMegaphone from 'react-icons/lib/go/megaphone'
import FaLifeRing from 'react-icons/lib/fa/life-bouy'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'post', 'page', 'pressRelease', 'subsidies', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Artikler')
        .icon(GoPin)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Artikler')),
      S.listItem()
        .title('Sider')
        .icon(MdContentCopy)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Sider')),
      S.listItem()
        .title('Pressemeldinger')
        .icon(GoMegaphone)
        .schemaType('pressRelease')
        .child(S.documentTypeList('pressRelease').title('Pressemeldinger')),
      S.listItem()
        .title('Støtteordninger')
        .icon(FaLifeRing)
        .schemaType('subsidies')
        .child(S.documentTypeList('subsidies').title('Støtteordninger')),
      S.listItem()
        .title('Mennesker')
        .icon(MdPerson)
        .schemaType('person')
        .child(S.documentTypeList('person').title('Mennesker')),
      S.listItem()
        .title('Kategorier')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategorier')),
      S.listItem()
        .title('Innstillinger')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
