import {AuthenticationMethod, Device} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordlessMicrosoftAuthenticatorAuthenticationMethod extends AuthenticationMethod, Partial<Parsable> {
    /** The createdDateTime property */
    createdDateTime?: Date;
    /** The timestamp when this method was registered to the user. */
    creationDateTime?: Date;
    /** The device property */
    device?: Device;
    /** The display name of the mobile device as given by the user. */
    displayName?: string;
}
