import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOpenTypeExtension} from './deserializeIntoOpenTypeExtension';
import {OpenTypeExtensionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenTypeExtensionCollectionResponse(openTypeExtensionCollectionResponse: OpenTypeExtensionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(openTypeExtensionCollectionResponse),
        "value": n => { openTypeExtensionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOpenTypeExtension) as any ; },
    }
}
