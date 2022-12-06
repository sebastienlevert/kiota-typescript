import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoContact} from './deserializeIntoContact';
import {ContactCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactCollectionResponse(contactCollectionResponse: ContactCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contactCollectionResponse),
        "value": n => { contactCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContact) as any ; },
    }
}
