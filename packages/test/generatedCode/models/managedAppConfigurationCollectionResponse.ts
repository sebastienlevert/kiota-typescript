import {BaseCollectionPaginationCountResponse, ManagedAppConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppConfiguration[];
}
