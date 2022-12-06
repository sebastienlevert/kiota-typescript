import {deserializeIntoWindowsUpdateInstallScheduleType} from './deserializeIntoWindowsUpdateInstallScheduleType';
import {WindowsUpdateActiveHoursInstall} from './index';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateActiveHoursInstall(windowsUpdateActiveHoursInstall: WindowsUpdateActiveHoursInstall | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsUpdateInstallScheduleType(windowsUpdateActiveHoursInstall),
        "activeHoursEnd": n => { windowsUpdateActiveHoursInstall.activeHoursEnd = n.getTimeOnlyValue() as any ; },
        "activeHoursStart": n => { windowsUpdateActiveHoursInstall.activeHoursStart = n.getTimeOnlyValue() as any ; },
    }
}
