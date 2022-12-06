import {BaseCollectionPaginationCountResponse, ManagedAppProtection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppProtection[];
}
