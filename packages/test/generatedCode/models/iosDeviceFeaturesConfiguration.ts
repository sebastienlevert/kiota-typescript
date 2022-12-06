import {AppleDeviceFeaturesConfigurationBase, IosHomeScreenItem, IosHomeScreenPage, IosNotificationSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase, Partial<Parsable> {
    /** Asset tag information for the device, displayed on the login window and lock screen. */
    assetTagTemplate?: string;
    /** A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements. */
    homeScreenDockIcons?: IosHomeScreenItem[];
    /** A list of pages on the Home Screen. This collection can contain a maximum of 500 elements. */
    homeScreenPages?: IosHomeScreenPage[];
    /** A footnote displayed on the login window and lock screen. Available in iOS 9.3.1 and later. */
    lockScreenFootnote?: string;
    /** Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This collection can contain a maximum of 500 elements. */
    notificationSettings?: IosNotificationSettings[];
}
