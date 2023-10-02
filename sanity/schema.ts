import { type SchemaTypeDefinition } from 'sanity'
import namePageSchema from "./schema/name-page-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [namePageSchema],
}
