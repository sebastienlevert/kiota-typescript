import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExtensionProperty} from './deserializeIntoExtensionProperty';
import {ExtensionPropertyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionPropertyCollectionResponse(extensionPropertyCollectionResponse: ExtensionPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(extensionPropertyCollectionResponse),
        "value": n => { extensionPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtensionProperty) as any ; },
    }
}
