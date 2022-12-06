import {UnifiedRoleManagementPolicyAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyAssignment} from './serializeUnifiedRoleManagementPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAssignmentCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyAssignmentCollectionResponse: UnifiedRoleManagementPolicyAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleManagementPolicyAssignmentCollectionResponse.value as any, serializeUnifiedRoleManagementPolicyAssignment);
}
