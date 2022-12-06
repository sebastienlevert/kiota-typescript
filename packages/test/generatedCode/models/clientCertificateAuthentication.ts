import {ApiAuthenticationConfigurationBase, Pkcs12CertificateInformation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ClientCertificateAuthentication extends ApiAuthenticationConfigurationBase, Partial<Parsable> {
    /** The list of certificates uploaded for this API connector. */
    certificateList?: Pkcs12CertificateInformation[];
}
