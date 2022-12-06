import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleAssignmentScheduleRequest} from './deserializeIntoUnifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleAssignmentScheduleRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleRequestCollectionResponse(unifiedRoleAssignmentScheduleRequestCollectionResponse: UnifiedRoleAssignmentScheduleRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentScheduleRequestCollectionResponse),
        "value": n => { unifiedRoleAssignmentScheduleRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleAssignmentScheduleRequest) as any ; },
    }
}
