import {AuthenticationMethodConfiguration, AuthenticationMethodTarget, Fido2KeyRestrictions} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Partial<Parsable> {
    /** A collection of users or groups who are enabled to use the authentication method. */
    includeTargets?: AuthenticationMethodTarget[];
    /** Determines whether attestation must be enforced for FIDO2 security key registration. */
    isAttestationEnforced?: boolean;
    /** Determines if users can register new FIDO2 security keys. */
    isSelfServiceRegistrationAllowed?: boolean;
    /** Controls whether key restrictions are enforced on FIDO2 security keys, either allowing or disallowing certain key types as defined by Authenticator Attestation GUID (AAGUID), an identifier that indicates the type (e.g. make and model) of the authenticator. */
    keyRestrictions?: Fido2KeyRestrictions;
}
