import {BaseCollectionPaginationCountResponse, IosCertificateProfile} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosCertificateProfileCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosCertificateProfile[];
}
