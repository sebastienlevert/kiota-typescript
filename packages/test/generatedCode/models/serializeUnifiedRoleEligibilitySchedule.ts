import {UnifiedRoleEligibilitySchedule} from './index';
import {serializeRequestSchedule} from './serializeRequestSchedule';
import {serializeUnifiedRoleScheduleBase} from './serializeUnifiedRoleScheduleBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilitySchedule(writer: SerializationWriter, unifiedRoleEligibilitySchedule: UnifiedRoleEligibilitySchedule | undefined = {}) : void {
        serializeUnifiedRoleScheduleBase(writer, unifiedRoleEligibilitySchedule)
            writer.writeStringValue("memberType", unifiedRoleEligibilitySchedule.memberType);
            writer.writeObjectValueFromMethod("scheduleInfo", unifiedRoleEligibilitySchedule.scheduleInfo as any, serializeRequestSchedule);
}
