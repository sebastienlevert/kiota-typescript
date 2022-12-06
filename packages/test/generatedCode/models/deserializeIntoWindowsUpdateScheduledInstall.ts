import {deserializeIntoWindowsUpdateInstallScheduleType} from './deserializeIntoWindowsUpdateInstallScheduleType';
import {WindowsUpdateScheduledInstall} from './index';
import {WeeklySchedule} from './weeklySchedule';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateScheduledInstall(windowsUpdateScheduledInstall: WindowsUpdateScheduledInstall | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateScheduledInstall),
        "scheduledInstallDay": n => { windowsUpdateScheduledInstall.scheduledInstallDay = n.getEnumValue<WeeklySchedule>(WeeklySchedule) as any ; },
        "scheduledInstallTime": n => { windowsUpdateScheduledInstall.scheduledInstallTime = n.getTimeOnlyValue() as any ; },
    }
}
