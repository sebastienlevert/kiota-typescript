import {AuthenticationMethod, EmailAuthenticationMethod, Entity, Fido2AuthenticationMethod, LongRunningOperation, MicrosoftAuthenticatorAuthenticationMethod, PasswordAuthenticationMethod, PhoneAuthenticationMethod, SoftwareOathAuthenticationMethod, TemporaryAccessPassAuthenticationMethod, WindowsHelloForBusinessAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Authentication extends Entity, Partial<Parsable> {
    /** The email address registered to a user for authentication. */
    emailMethods?: EmailAuthenticationMethod[];
    /** Represents the FIDO2 security keys registered to a user for authentication. */
    fido2Methods?: Fido2AuthenticationMethod[];
    /** Represents all authentication methods registered to a user. */
    methods?: AuthenticationMethod[];
    /** The details of the Microsoft Authenticator app registered to a user for authentication. */
    microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethod[];
    /** Represents the status of a long-running operation. */
    operations?: LongRunningOperation[];
    /** Represents the password that's registered to a user for authentication. For security, the password itself will never be returned in the object, but action can be taken to reset a password. */
    passwordMethods?: PasswordAuthenticationMethod[];
    /** The phone numbers registered to a user for authentication. */
    phoneMethods?: PhoneAuthenticationMethod[];
    /** The software OATH TOTP applications registered to a user for authentication. */
    softwareOathMethods?: SoftwareOathAuthenticationMethod[];
    /** Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes. */
    temporaryAccessPassMethods?: TemporaryAccessPassAuthenticationMethod[];
    /** Represents the Windows Hello for Business authentication method registered to a user for authentication. */
    windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethod[];
}
