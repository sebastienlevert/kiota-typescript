import {BaseCollectionPaginationCountResponse, CertificateBasedAuthConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CertificateBasedAuthConfiguration[];
}
