import { type SchemaTypeDefinition } from 'sanity'
import namePageSchema from "./schema/name-page-schema"
import quranTopicsSchema from "./schema/quran-topics-schema"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [namePageSchema, quranTopicsSchema],
}
