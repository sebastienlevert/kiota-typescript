import {UnifiedRoleEligibilityScheduleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleCollectionResponse(writer: SerializationWriter, unifiedRoleEligibilityScheduleCollectionResponse: UnifiedRoleEligibilityScheduleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleEligibilityScheduleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleEligibilityScheduleCollectionResponse.value as any, serializeUnifiedRoleEligibilitySchedule);
}
