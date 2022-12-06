import {BaseCollectionPaginationCountResponse, DeviceConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceConfiguration[];
}
