import {WindowsUpdateInstallScheduleType} from './index';
import {WeeklySchedule} from './weeklySchedule';
import {Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface WindowsUpdateScheduledInstall extends Partial<Parsable>, WindowsUpdateInstallScheduleType {
    /** Possible values for a weekly schedule. */
    scheduledInstallDay?: WeeklySchedule;
    /** Scheduled Install Time during day */
    scheduledInstallTime?: TimeOnly;
}
