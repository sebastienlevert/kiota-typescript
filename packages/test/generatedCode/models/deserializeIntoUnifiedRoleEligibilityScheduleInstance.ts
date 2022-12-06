import {deserializeIntoUnifiedRoleScheduleInstanceBase} from './deserializeIntoUnifiedRoleScheduleInstanceBase';
import {UnifiedRoleEligibilityScheduleInstance} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilityScheduleInstance(unifiedRoleEligibilityScheduleInstance: UnifiedRoleEligibilityScheduleInstance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleScheduleInstanceBase(unifiedRoleEligibilityScheduleInstance),
        "endDateTime": n => { unifiedRoleEligibilityScheduleInstance.endDateTime = n.getDateValue() as any ; },
        "memberType": n => { unifiedRoleEligibilityScheduleInstance.memberType = n.getStringValue() as any ; },
        "roleEligibilityScheduleId": n => { unifiedRoleEligibilityScheduleInstance.roleEligibilityScheduleId = n.getStringValue() as any ; },
        "startDateTime": n => { unifiedRoleEligibilityScheduleInstance.startDateTime = n.getDateValue() as any ; },
    }
}
