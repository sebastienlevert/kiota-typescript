import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSchemaExtension} from './deserializeIntoSchemaExtension';
import {SchemaExtensionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchemaExtensionCollectionResponse(schemaExtensionCollectionResponse: SchemaExtensionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(schemaExtensionCollectionResponse),
        "value": n => { schemaExtensionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSchemaExtension) as any ; },
    }
}
