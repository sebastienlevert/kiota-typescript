import {AuthenticationMethod, EmailAuthenticationMethod, Entity, Fido2AuthenticationMethod, LongRunningOperation, MicrosoftAuthenticatorAuthenticationMethod, PasswordAuthenticationMethod, PasswordlessMicrosoftAuthenticatorAuthenticationMethod, PhoneAuthenticationMethod, SoftwareOathAuthenticationMethod, TemporaryAccessPassAuthenticationMethod, WindowsHelloForBusinessAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Authentication extends Entity, Partial<Parsable> {
    /** Represents the email addresses registered to a user for authentication. */
    emailMethods?: EmailAuthenticationMethod[];
    /** Represents the FIDO2 security keys registered to a user for authentication. */
    fido2Methods?: Fido2AuthenticationMethod[];
    /** Represents all authentication methods registered to a user. */
    methods?: AuthenticationMethod[];
    /** The details of the Microsoft Authenticator app registered to a user for authentication. */
    microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethod[];
    /** The operations property */
    operations?: LongRunningOperation[];
    /** Represents the Microsoft Authenticator Passwordless Phone Sign-in methods registered to a user for authentication. */
    passwordlessMicrosoftAuthenticatorMethods?: PasswordlessMicrosoftAuthenticatorAuthenticationMethod[];
    /** Represents the details of the password authentication method registered to a user for authentication. */
    passwordMethods?: PasswordAuthenticationMethod[];
    /** Represents the phone registered to a user for authentication. */
    phoneMethods?: PhoneAuthenticationMethod[];
    /** The softwareOathMethods property */
    softwareOathMethods?: SoftwareOathAuthenticationMethod[];
    /** Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes. */
    temporaryAccessPassMethods?: TemporaryAccessPassAuthenticationMethod[];
    /** Represents the Windows Hello for Business authentication method registered to a user for authentication. */
    windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethod[];
}
