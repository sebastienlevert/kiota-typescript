import {deserializeIntoRequestSchedule} from './deserializeIntoRequestSchedule';
import {deserializeIntoUnifiedRoleScheduleBase} from './deserializeIntoUnifiedRoleScheduleBase';
import {UnifiedRoleEligibilitySchedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleEligibilitySchedule(unifiedRoleEligibilitySchedule: UnifiedRoleEligibilitySchedule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleScheduleBase(unifiedRoleEligibilitySchedule),
        "memberType": n => { unifiedRoleEligibilitySchedule.memberType = n.getStringValue() as any ; },
        "scheduleInfo": n => { unifiedRoleEligibilitySchedule.scheduleInfo = n.getObject(deserializeIntoRequestSchedule) as any ; },
    }
}
