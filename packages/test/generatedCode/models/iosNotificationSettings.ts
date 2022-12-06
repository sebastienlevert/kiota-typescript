import {IosNotificationAlertType} from './iosNotificationAlertType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosNotificationSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Notification Settings Alert Type. */
    alertType?: IosNotificationAlertType;
    /** Application name to be associated with the bundleID. */
    appName?: string;
    /** Indicates whether badges are allowed for this app. */
    badgesEnabled?: boolean;
    /** Bundle id of app to which to apply these notification settings. */
    bundleID?: string;
    /** Indicates whether notifications are allowed for this app. */
    enabled?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** Publisher to be associated with the bundleID. */
    publisher?: string;
    /** Indicates whether notifications can be shown in notification center. */
    showInNotificationCenter?: boolean;
    /** Indicates whether notifications can be shown on the lock screen. */
    showOnLockScreen?: boolean;
    /** Indicates whether sounds are allowed for this app. */
    soundsEnabled?: boolean;
}
