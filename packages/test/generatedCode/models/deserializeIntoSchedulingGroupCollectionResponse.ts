import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSchedulingGroup} from './deserializeIntoSchedulingGroup';
import {SchedulingGroupCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchedulingGroupCollectionResponse(schedulingGroupCollectionResponse: SchedulingGroupCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(schedulingGroupCollectionResponse),
        "value": n => { schedulingGroupCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSchedulingGroup) as any ; },
    }
}
