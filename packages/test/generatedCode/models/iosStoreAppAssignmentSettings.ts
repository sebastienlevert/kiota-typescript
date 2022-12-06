import {MobileAppAssignmentSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosStoreAppAssignmentSettings extends MobileAppAssignmentSettings, Partial<Parsable> {
    /** The VPN Configuration Id to apply for this app. */
    vpnConfigurationId?: string;
}
