import {AuthenticationMethod, Device} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethod extends AuthenticationMethod, Partial<Parsable> {
    /** The date and time that this app was registered. This property is null if the device is not registered for passwordless Phone Sign-In. */
    createdDateTime?: Date;
    /** The device property */
    device?: Device;
    /** Tags containing app metadata. */
    deviceTag?: string;
    /** The name of the device on which this app is registered. */
    displayName?: string;
    /** Numerical version of this instance of the Authenticator app. */
    phoneAppVersion?: string;
}
