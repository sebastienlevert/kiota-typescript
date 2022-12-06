import {UnifiedRoleAssignmentScheduleInstanceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleInstance} from './serializeUnifiedRoleAssignmentScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleInstanceCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentScheduleInstanceCollectionResponse: UnifiedRoleAssignmentScheduleInstanceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentScheduleInstanceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleAssignmentScheduleInstanceCollectionResponse.value as any, serializeUnifiedRoleAssignmentScheduleInstance);
}
