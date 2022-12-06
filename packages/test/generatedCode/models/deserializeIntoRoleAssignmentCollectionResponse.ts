import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRoleAssignment} from './deserializeIntoRoleAssignment';
import {RoleAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleAssignmentCollectionResponse(roleAssignmentCollectionResponse: RoleAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roleAssignmentCollectionResponse),
        "value": n => { roleAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRoleAssignment) as any ; },
    }
}
