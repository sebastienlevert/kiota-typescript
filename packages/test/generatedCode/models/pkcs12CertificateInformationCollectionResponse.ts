import {BaseCollectionPaginationCountResponse, Pkcs12CertificateInformation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Pkcs12CertificateInformationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Pkcs12CertificateInformation[];
}
