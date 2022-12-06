import {AuthenticationMethodTarget} from './index';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodTarget extends AuthenticationMethodTarget, Partial<Parsable> {
    /** The authenticationMode property */
    authenticationMode?: MicrosoftAuthenticatorAuthenticationMode;
}
