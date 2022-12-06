import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTimeOffReason} from './deserializeIntoTimeOffReason';
import {TimeOffReasonCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffReasonCollectionResponse(timeOffReasonCollectionResponse: TimeOffReasonCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeOffReasonCollectionResponse),
        "value": n => { timeOffReasonCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeOffReason) as any ; },
    }
}
