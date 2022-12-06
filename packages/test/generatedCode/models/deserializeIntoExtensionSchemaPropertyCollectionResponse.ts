import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExtensionSchemaProperty} from './deserializeIntoExtensionSchemaProperty';
import {ExtensionSchemaPropertyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionSchemaPropertyCollectionResponse(extensionSchemaPropertyCollectionResponse: ExtensionSchemaPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(extensionSchemaPropertyCollectionResponse),
        "value": n => { extensionSchemaPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtensionSchemaProperty) as any ; },
    }
}
