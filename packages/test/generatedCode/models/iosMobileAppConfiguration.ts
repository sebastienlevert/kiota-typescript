import {AppConfigurationSettingItem, ManagedDeviceMobileAppConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosMobileAppConfiguration extends ManagedDeviceMobileAppConfiguration, Partial<Parsable> {
    /** mdm app configuration Base64 binary. */
    encodedSettingXml?: string;
    /** app configuration setting items. */
    settings?: AppConfigurationSettingItem[];
}
