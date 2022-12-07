import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {AuthenticationMethod, Device} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsHelloForBusinessAuthenticationMethod extends AuthenticationMethod, Partial<Parsable> {
    /** The date and time that this Windows Hello for Business key was registered. */
    createdDateTime?: Date;
    /** The device property */
    device?: Device;
    /** The name of the device on which Windows Hello for Business is registered */
    displayName?: string;
    /** The keyStrength property */
    keyStrength?: AuthenticationMethodKeyStrength;
}
