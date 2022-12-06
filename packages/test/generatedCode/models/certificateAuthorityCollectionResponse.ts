import {BaseCollectionPaginationCountResponse, CertificateAuthority} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CertificateAuthorityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CertificateAuthority[];
}
