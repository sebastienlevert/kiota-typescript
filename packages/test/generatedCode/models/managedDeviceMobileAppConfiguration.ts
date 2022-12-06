import {Entity, ManagedDeviceMobileAppConfigurationAssignment, ManagedDeviceMobileAppConfigurationDeviceStatus, ManagedDeviceMobileAppConfigurationDeviceSummary, ManagedDeviceMobileAppConfigurationUserStatus, ManagedDeviceMobileAppConfigurationUserSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfiguration extends Entity, Partial<Parsable> {
    /** The list of group assignemenets for app configration. */
    assignments?: ManagedDeviceMobileAppConfigurationAssignment[];
    /** DateTime the object was created. */
    createdDateTime?: Date;
    /** Admin provided description of the Device Configuration. */
    description?: string;
    /** List of ManagedDeviceMobileAppConfigurationDeviceStatus. */
    deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatus[];
    /** App configuration device status summary. */
    deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummary;
    /** Admin provided name of the device configuration. */
    displayName?: string;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?: Date;
    /** the associated app. */
    targetedMobileApps?: string[];
    /** List of ManagedDeviceMobileAppConfigurationUserStatus. */
    userStatuses?: ManagedDeviceMobileAppConfigurationUserStatus[];
    /** App configuration user status summary. */
    userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummary;
    /** Version of the device configuration. */
    version?: number;
}
