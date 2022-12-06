import {WindowsUpdateActiveHoursInstall} from './index';
import {serializeWindowsUpdateInstallScheduleType} from './serializeWindowsUpdateInstallScheduleType';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeWindowsUpdateActiveHoursInstall(writer: SerializationWriter, windowsUpdateActiveHoursInstall: WindowsUpdateActiveHoursInstall | undefined = {}) : void {
        serializeWindowsUpdateInstallScheduleType(writer, windowsUpdateActiveHoursInstall)
            writer.writeTimeOnlyValue("activeHoursEnd", windowsUpdateActiveHoursInstall.activeHoursEnd);
            writer.writeTimeOnlyValue("activeHoursStart", windowsUpdateActiveHoursInstall.activeHoursStart);
}
