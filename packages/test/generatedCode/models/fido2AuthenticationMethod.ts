import {AttestationLevel} from './attestationLevel';
import {AuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethod extends AuthenticationMethod, Partial<Parsable> {
    /** Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator. */
    aaGuid?: string;
    /** The attestation certificate(s) attached to this security key. */
    attestationCertificates?: string[];
    /** The attestation level of this FIDO2 security key. Possible values are: attested, or notAttested. */
    attestationLevel?: AttestationLevel;
    /** The timestamp when this key was registered to the user. */
    createdDateTime?: Date;
    /** The display name of the key as given by the user. */
    displayName?: string;
    /** The manufacturer-assigned model of the FIDO2 security key. */
    model?: string;
}
