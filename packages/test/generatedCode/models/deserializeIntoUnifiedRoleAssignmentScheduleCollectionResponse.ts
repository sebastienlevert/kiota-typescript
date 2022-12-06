import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleAssignmentSchedule} from './deserializeIntoUnifiedRoleAssignmentSchedule';
import {UnifiedRoleAssignmentScheduleCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleCollectionResponse(unifiedRoleAssignmentScheduleCollectionResponse: UnifiedRoleAssignmentScheduleCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentScheduleCollectionResponse),
        "value": n => { unifiedRoleAssignmentScheduleCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleAssignmentSchedule) as any ; },
    }
}
