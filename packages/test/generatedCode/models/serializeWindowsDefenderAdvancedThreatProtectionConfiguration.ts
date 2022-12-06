import {WindowsDefenderAdvancedThreatProtectionConfiguration} from './index';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderAdvancedThreatProtectionConfiguration(writer: SerializationWriter, windowsDefenderAdvancedThreatProtectionConfiguration: WindowsDefenderAdvancedThreatProtectionConfiguration | undefined = {}) : void {
        serializeDeviceConfiguration(writer, windowsDefenderAdvancedThreatProtectionConfiguration)
            writer.writeBooleanValue("allowSampleSharing", windowsDefenderAdvancedThreatProtectionConfiguration.allowSampleSharing);
            writer.writeBooleanValue("enableExpeditedTelemetryReporting", windowsDefenderAdvancedThreatProtectionConfiguration.enableExpeditedTelemetryReporting);
}
