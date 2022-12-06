import {UnifiedRoleEligibilityScheduleRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleRequest} from './serializeUnifiedRoleEligibilityScheduleRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleRequestCollectionResponse(writer: SerializationWriter, unifiedRoleEligibilityScheduleRequestCollectionResponse: UnifiedRoleEligibilityScheduleRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleEligibilityScheduleRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleEligibilityScheduleRequestCollectionResponse.value as any, serializeUnifiedRoleEligibilityScheduleRequest);
}
