import {Entity, MobileAppIntentAndStateDetail} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppIntentAndState extends Entity, Partial<Parsable> {
    /** Device identifier created or collected by Intune. */
    managedDeviceIdentifier?: string;
    /** The list of payload intents and states for the tenant. */
    mobileAppList?: MobileAppIntentAndStateDetail[];
    /** Identifier for the user that tried to enroll the device. */
    userId?: string;
}
