import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTimeOffRequest} from './deserializeIntoTimeOffRequest';
import {TimeOffRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffRequestCollectionResponse(timeOffRequestCollectionResponse: TimeOffRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeOffRequestCollectionResponse),
        "value": n => { timeOffRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeOffRequest) as any ; },
    }
}
