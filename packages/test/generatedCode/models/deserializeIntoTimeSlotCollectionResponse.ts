import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTimeSlot} from './deserializeIntoTimeSlot';
import {TimeSlotCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeSlotCollectionResponse(timeSlotCollectionResponse: TimeSlotCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeSlotCollectionResponse),
        "value": n => { timeSlotCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeSlot) as any ; },
    }
}
