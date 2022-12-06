import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {WindowsDefenderAdvancedThreatProtectionConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration(windowsDefenderAdvancedThreatProtectionConfiguration: WindowsDefenderAdvancedThreatProtectionConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsDefenderAdvancedThreatProtectionConfiguration),
        "allowSampleSharing": n => { windowsDefenderAdvancedThreatProtectionConfiguration.allowSampleSharing = n.getBooleanValue() as any ; },
        "enableExpeditedTelemetryReporting": n => { windowsDefenderAdvancedThreatProtectionConfiguration.enableExpeditedTelemetryReporting = n.getBooleanValue() as any ; },
    }
}
