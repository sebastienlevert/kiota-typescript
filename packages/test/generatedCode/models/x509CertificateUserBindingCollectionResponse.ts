import {BaseCollectionPaginationCountResponse, X509CertificateUserBinding} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface X509CertificateUserBindingCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: X509CertificateUserBinding[];
}
