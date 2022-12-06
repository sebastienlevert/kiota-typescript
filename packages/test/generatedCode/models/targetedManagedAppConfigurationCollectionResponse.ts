import {BaseCollectionPaginationCountResponse, TargetedManagedAppConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TargetedManagedAppConfiguration[];
}
