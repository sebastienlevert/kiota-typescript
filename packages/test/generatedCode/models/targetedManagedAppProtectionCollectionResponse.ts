import {BaseCollectionPaginationCountResponse, TargetedManagedAppProtection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TargetedManagedAppProtection[];
}
