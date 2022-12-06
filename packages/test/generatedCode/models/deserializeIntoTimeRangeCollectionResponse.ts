import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTimeRange} from './deserializeIntoTimeRange';
import {TimeRangeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeRangeCollectionResponse(timeRangeCollectionResponse: TimeRangeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeRangeCollectionResponse),
        "value": n => { timeRangeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeRange) as any ; },
    }
}
