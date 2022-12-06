import {UnifiedRoleAssignmentScheduleRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleRequest} from './serializeUnifiedRoleAssignmentScheduleRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleRequestCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentScheduleRequestCollectionResponse: UnifiedRoleAssignmentScheduleRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentScheduleRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleAssignmentScheduleRequestCollectionResponse.value as any, serializeUnifiedRoleAssignmentScheduleRequest);
}
