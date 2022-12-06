import {BaseCollectionPaginationCountResponse, ManagedDeviceMobileAppConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedDeviceMobileAppConfiguration[];
}
