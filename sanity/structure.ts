import type {StructureResolver} from 'sanity/structure'

// Document types that are singletons (only one doc per type)
const SINGLETONS = ['homePage', 'editorGuide']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Editor Guide — pinned at the top so editors see it first.
      // Opens a list (currently one doc) so we don't have to hardcode a documentId.
      S.listItem()
        .title('📖 Editor Guide')
        .id('editorGuide')
        .child(
          S.documentTypeList('editorGuide').title('Editor Guide')
        ),
      S.divider(),
      // Singleton: Home Page — always opens the same document
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.divider(),
      // Regular document types (singletons excluded from auto-list)
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.includes(item.getId() ?? '')
      ),
    ])
