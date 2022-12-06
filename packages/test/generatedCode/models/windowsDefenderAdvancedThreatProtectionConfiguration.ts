import {DeviceConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDefenderAdvancedThreatProtectionConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule */
    allowSampleSharing?: boolean;
    /** Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency. */
    enableExpeditedTelemetryReporting?: boolean;
}
