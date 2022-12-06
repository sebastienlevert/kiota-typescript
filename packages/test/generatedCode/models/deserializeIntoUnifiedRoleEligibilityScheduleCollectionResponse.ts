import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from './deserializeIntoUnifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilityScheduleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleCollectionResponse(unifiedRoleEligibilityScheduleCollectionResponse: UnifiedRoleEligibilityScheduleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleEligibilityScheduleCollectionResponse),
        "value": n => { unifiedRoleEligibilityScheduleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleEligibilitySchedule) as any ; },
    }
}
