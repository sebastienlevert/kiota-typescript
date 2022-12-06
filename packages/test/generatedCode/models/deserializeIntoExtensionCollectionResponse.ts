import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {ExtensionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionCollectionResponse(extensionCollectionResponse: ExtensionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(extensionCollectionResponse),
        "value": n => { extensionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
    }
}
