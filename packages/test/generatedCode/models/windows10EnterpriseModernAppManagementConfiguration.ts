import {DeviceConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10EnterpriseModernAppManagementConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to uninstall a fixed list of built-in Windows apps. */
    uninstallBuiltInApps?: boolean;
}
