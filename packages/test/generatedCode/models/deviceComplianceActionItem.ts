import {DeviceComplianceActionType} from './deviceComplianceActionType';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceActionItem extends Entity, Partial<Parsable> {
    /** Scheduled Action Type Enum */
    actionType?: DeviceComplianceActionType;
    /** Number of hours to wait till the action will be enforced. Valid values 0 to 8760 */
    gracePeriodHours?: number;
    /** A list of group IDs to speicify who to CC this notification message to. */
    notificationMessageCCList?: string[];
    /** What notification Message template to use */
    notificationTemplateId?: string;
}
