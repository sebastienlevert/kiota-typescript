import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleEligibilityScheduleRequest} from './deserializeIntoUnifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleEligibilityScheduleRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleRequestCollectionResponse(unifiedRoleEligibilityScheduleRequestCollectionResponse: UnifiedRoleEligibilityScheduleRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleEligibilityScheduleRequestCollectionResponse),
        "value": n => { unifiedRoleEligibilityScheduleRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleEligibilityScheduleRequest) as any ; },
    }
}
