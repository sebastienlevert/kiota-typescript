import {UnifiedRoleEligibilityScheduleInstance} from './index';
import {serializeUnifiedRoleScheduleInstanceBase} from './serializeUnifiedRoleScheduleInstanceBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleInstance(writer: SerializationWriter, unifiedRoleEligibilityScheduleInstance: UnifiedRoleEligibilityScheduleInstance | undefined = {}) : void {
        serializeUnifiedRoleScheduleInstanceBase(writer, unifiedRoleEligibilityScheduleInstance)
            writer.writeDateValue("endDateTime", unifiedRoleEligibilityScheduleInstance.endDateTime);
            writer.writeStringValue("memberType", unifiedRoleEligibilityScheduleInstance.memberType);
            writer.writeStringValue("roleEligibilityScheduleId", unifiedRoleEligibilityScheduleInstance.roleEligibilityScheduleId);
            writer.writeDateValue("startDateTime", unifiedRoleEligibilityScheduleInstance.startDateTime);
}
