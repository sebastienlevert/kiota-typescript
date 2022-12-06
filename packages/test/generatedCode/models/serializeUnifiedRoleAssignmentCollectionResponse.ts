import {UnifiedRoleAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignment} from './serializeUnifiedRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentCollectionResponse: UnifiedRoleAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleAssignmentCollectionResponse.value as any, serializeUnifiedRoleAssignment);
}
