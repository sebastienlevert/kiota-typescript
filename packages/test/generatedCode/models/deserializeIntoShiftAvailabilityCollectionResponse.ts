import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoShiftAvailability} from './deserializeIntoShiftAvailability';
import {ShiftAvailabilityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftAvailabilityCollectionResponse(shiftAvailabilityCollectionResponse: ShiftAvailabilityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(shiftAvailabilityCollectionResponse),
        "value": n => { shiftAvailabilityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoShiftAvailability) as any ; },
    }
}
