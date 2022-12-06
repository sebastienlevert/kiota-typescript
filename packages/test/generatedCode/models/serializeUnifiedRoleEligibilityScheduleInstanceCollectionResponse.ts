import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleInstance} from './serializeUnifiedRoleEligibilityScheduleInstance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleInstanceCollectionResponse(writer: SerializationWriter, unifiedRoleEligibilityScheduleInstanceCollectionResponse: UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleEligibilityScheduleInstanceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleEligibilityScheduleInstanceCollectionResponse.value as any, serializeUnifiedRoleEligibilityScheduleInstance);
}
