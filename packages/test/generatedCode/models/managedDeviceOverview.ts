import {DeviceExchangeAccessStateSummary, DeviceOperatingSystemSummary, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceOverview extends Entity, Partial<Parsable> {
    /** Distribution of Exchange Access State in Intune */
    deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary;
    /** Device operating system summary. */
    deviceOperatingSystemSummary?: DeviceOperatingSystemSummary;
    /** The number of devices enrolled in both MDM and EAS */
    dualEnrolledDeviceCount?: number;
    /** Total enrolled device count. Does not include PC devices managed via Intune PC Agent */
    enrolledDeviceCount?: number;
    /** The number of devices enrolled in MDM */
    mdmEnrolledCount?: number;
}
