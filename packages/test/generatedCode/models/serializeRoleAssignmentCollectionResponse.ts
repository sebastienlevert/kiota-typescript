import {RoleAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoleAssignment} from './serializeRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleAssignmentCollectionResponse(writer: SerializationWriter, roleAssignmentCollectionResponse: RoleAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roleAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", roleAssignmentCollectionResponse.value as any, serializeRoleAssignment);
}
