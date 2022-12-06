import {CertificateAuthority, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfiguration extends Entity, Partial<Parsable> {
    /** Collection of certificate authorities which creates a trusted certificate chain. */
    certificateAuthorities?: CertificateAuthority[];
}
