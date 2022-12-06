import {BaseCollectionPaginationCountResponse, DefaultManagedAppProtection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DefaultManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DefaultManagedAppProtection[];
}
