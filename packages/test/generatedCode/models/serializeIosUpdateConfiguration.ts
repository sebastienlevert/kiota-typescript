import {DayOfWeek} from './dayOfWeek';
import {IosUpdateConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeIosUpdateConfiguration(writer: SerializationWriter, iosUpdateConfiguration: IosUpdateConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, iosUpdateConfiguration)
            writer.writeTimeOnlyValue("activeHoursEnd", iosUpdateConfiguration.activeHoursEnd);
            writer.writeTimeOnlyValue("activeHoursStart", iosUpdateConfiguration.activeHoursStart);
            writer.writeEnumValue<DayOfWeek>("scheduledInstallDays", iosUpdateConfiguration.scheduledInstallDays);
            writer.writeNumberValue("utcTimeOffsetInMinutes", iosUpdateConfiguration.utcTimeOffsetInMinutes);
}
