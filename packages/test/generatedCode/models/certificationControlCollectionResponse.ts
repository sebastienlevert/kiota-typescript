import {BaseCollectionPaginationCountResponse, CertificationControl} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CertificationControlCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CertificationControl[];
}
