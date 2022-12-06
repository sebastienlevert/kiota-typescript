import {BaseCollectionPaginationCountResponse, IosManagedAppProtection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosManagedAppProtection[];
}
