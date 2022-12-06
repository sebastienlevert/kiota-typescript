import {IdentityProviderBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BuiltInIdentityProvider extends IdentityProviderBase, Partial<Parsable> {
    /** The identity provider type. For a B2B scenario, possible values: AADSignup, MicrosoftAccount, EmailOTP. Required. */
    identityProviderType?: string;
}
