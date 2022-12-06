import {WindowsUpdateScheduledInstall} from './index';
import {serializeWindowsUpdateInstallScheduleType} from './serializeWindowsUpdateInstallScheduleType';
import {WeeklySchedule} from './weeklySchedule';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateScheduledInstall(writer: SerializationWriter, windowsUpdateScheduledInstall: WindowsUpdateScheduledInstall | undefined = {}) : void {
        serializeWindowsUpdateInstallScheduleType(writer, windowsUpdateScheduledInstall)
            writer.writeEnumValue<WeeklySchedule>("scheduledInstallDay", windowsUpdateScheduledInstall.scheduledInstallDay);
            writer.writeTimeOnlyValue("scheduledInstallTime", windowsUpdateScheduledInstall.scheduledInstallTime);
}
