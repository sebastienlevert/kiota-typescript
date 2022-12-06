import {BaseCollectionPaginationCountResponse, LicenseDetails} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseDetailsCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LicenseDetails[];
}
