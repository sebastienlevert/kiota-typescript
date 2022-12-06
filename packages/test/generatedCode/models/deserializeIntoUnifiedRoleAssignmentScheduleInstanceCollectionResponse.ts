import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleAssignmentScheduleInstance} from './deserializeIntoUnifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleInstanceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleInstanceCollectionResponse(unifiedRoleAssignmentScheduleInstanceCollectionResponse: UnifiedRoleAssignmentScheduleInstanceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentScheduleInstanceCollectionResponse),
        "value": n => { unifiedRoleAssignmentScheduleInstanceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleAssignmentScheduleInstance) as any ; },
    }
}
