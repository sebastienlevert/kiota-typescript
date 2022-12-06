import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoScheduleItem} from './deserializeIntoScheduleItem';
import {ScheduleItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleItemCollectionResponse(scheduleItemCollectionResponse: ScheduleItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(scheduleItemCollectionResponse),
        "value": n => { scheduleItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScheduleItem) as any ; },
    }
}
