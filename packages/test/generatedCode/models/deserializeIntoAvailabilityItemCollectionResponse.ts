import {deserializeIntoAvailabilityItem} from './deserializeIntoAvailabilityItem';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AvailabilityItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAvailabilityItemCollectionResponse(availabilityItemCollectionResponse: AvailabilityItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(availabilityItemCollectionResponse),
        "value": n => { availabilityItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAvailabilityItem) as any ; },
    }
}
