import {deserializeIntoDirectRoutingLogRow} from '../../../models/callRecords/deserializeIntoDirectRoutingLogRow';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse(getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse: GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse),
        "value": n => { getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectRoutingLogRow) as any ; },
    }
}
