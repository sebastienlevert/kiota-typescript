import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleEligibilityScheduleInstance} from './deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleInstanceCollectionResponse(unifiedRoleEligibilityScheduleInstanceCollectionResponse: UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleEligibilityScheduleInstanceCollectionResponse),
        "value": n => { unifiedRoleEligibilityScheduleInstanceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleEligibilityScheduleInstance) as any ; },
    }
}
