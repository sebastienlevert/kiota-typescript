import {BaseCollectionPaginationCountResponse, X509CertificateAuthenticationMethodConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface X509CertificateAuthenticationMethodConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: X509CertificateAuthenticationMethodConfiguration[];
}
