import {BaseCollectionPaginationCountResponse, X509CertificateRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface X509CertificateRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: X509CertificateRule[];
}
