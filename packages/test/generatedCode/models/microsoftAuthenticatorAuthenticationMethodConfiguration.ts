import {AuthenticationMethodConfiguration, MicrosoftAuthenticatorAuthenticationMethodTarget, MicrosoftAuthenticatorFeatureSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Partial<Parsable> {
    /** A collection of Microsoft Authenticator settings such as application context and location context, and whether they are enabled for all users or specific users only. */
    featureSettings?: MicrosoftAuthenticatorFeatureSettings;
    /** A collection of users or groups who are enabled to use the authentication method. Expanded by default. */
    includeTargets?: MicrosoftAuthenticatorAuthenticationMethodTarget[];
}
