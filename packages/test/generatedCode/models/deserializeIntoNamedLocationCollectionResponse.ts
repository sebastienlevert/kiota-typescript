import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoNamedLocation} from './deserializeIntoNamedLocation';
import {NamedLocationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNamedLocationCollectionResponse(namedLocationCollectionResponse: NamedLocationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(namedLocationCollectionResponse),
        "value": n => { namedLocationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNamedLocation) as any ; },
    }
}
