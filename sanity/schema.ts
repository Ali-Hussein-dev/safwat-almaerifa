import { type SchemaTypeDefinition } from 'sanity'
import namePageSchema from "./schema/name-page-schema"
import quranTopicsSchema from "./schema/quran-topics-schema"
import ruinersSchema from './schema/ruiners-schema'
import SimilarNamesSchema from './schema/similar-names-schema'
import straightPathSchema from './schema/straight-path-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [namePageSchema, quranTopicsSchema, SimilarNamesSchema, ruinersSchema, straightPathSchema],
}
