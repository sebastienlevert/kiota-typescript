import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoShift} from './deserializeIntoShift';
import {ShiftCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftCollectionResponse(shiftCollectionResponse: ShiftCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(shiftCollectionResponse),
        "value": n => { shiftCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoShift) as any ; },
    }
}
