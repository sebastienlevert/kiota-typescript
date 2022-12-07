import {MobileAppSupportedDeviceType} from './index';
import {MobileAppIntent} from './mobileAppIntent';
import {ResultantAppState} from './resultantAppState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppIntentAndStateDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** MobieApp identifier. */
    applicationId?: string;
    /** The admin provided or imported title of the app. */
    displayName?: string;
    /** Human readable version of the application */
    displayVersion?: string;
    /** A list of possible states for application status on an individual device. When devices contact the Intune service and find targeted application enforcement intent, the status of the enforcement is recorded and becomes accessible in the Graph API. Since the application status is identified during device interaction with the Intune service, status records do not immediately appear upon application group assignment; it is created only after the assignment is evaluated in the service and devices start receiving the policy during check-ins. */
    installState?: ResultantAppState;
    /** Indicates the status of the mobile app on the device. */
    mobileAppIntent?: MobileAppIntent;
    /** The supported platforms for the app. */
    supportedDeviceTypes?: MobileAppSupportedDeviceType[];
}
