import {DayOfWeek} from './dayOfWeek';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {IosUpdateConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosUpdateConfiguration(iosUpdateConfiguration: IosUpdateConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(iosUpdateConfiguration),
        "activeHoursEnd": n => { iosUpdateConfiguration.activeHoursEnd = n.getTimeOnlyValue() as any ; },
        "activeHoursStart": n => { iosUpdateConfiguration.activeHoursStart = n.getTimeOnlyValue() as any ; },
        "scheduledInstallDays": n => { iosUpdateConfiguration.scheduledInstallDays = n.getEnumValues<DayOfWeek>(DayOfWeek) as any ; },
        "utcTimeOffsetInMinutes": n => { iosUpdateConfiguration.utcTimeOffsetInMinutes = n.getNumberValue() as any ; },
    }
}
