import {UnifiedRoleAssignmentScheduleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentSchedule} from './serializeUnifiedRoleAssignmentSchedule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentScheduleCollectionResponse: UnifiedRoleAssignmentScheduleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentScheduleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleAssignmentScheduleCollectionResponse.value as any, serializeUnifiedRoleAssignmentSchedule);
}
