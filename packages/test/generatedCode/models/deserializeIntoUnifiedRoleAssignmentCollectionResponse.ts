import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUnifiedRoleAssignment} from './deserializeIntoUnifiedRoleAssignment';
import {UnifiedRoleAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentCollectionResponse(unifiedRoleAssignmentCollectionResponse: UnifiedRoleAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentCollectionResponse),
        "value": n => { unifiedRoleAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedRoleAssignment) as any ; },
    }
}
