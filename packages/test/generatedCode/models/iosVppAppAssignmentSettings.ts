import {MobileAppAssignmentSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppAppAssignmentSettings extends MobileAppAssignmentSettings, Partial<Parsable> {
    /** Whether or not to use device licensing. */
    useDeviceLicensing?: boolean;
    /** The VPN Configuration Id to apply for this app. */
    vpnConfigurationId?: string;
}
