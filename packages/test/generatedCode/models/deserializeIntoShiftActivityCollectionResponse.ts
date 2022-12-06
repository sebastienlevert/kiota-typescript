import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoShiftActivity} from './deserializeIntoShiftActivity';
import {ShiftActivityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftActivityCollectionResponse(shiftActivityCollectionResponse: ShiftActivityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(shiftActivityCollectionResponse),
        "value": n => { shiftActivityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoShiftActivity) as any ; },
    }
}
