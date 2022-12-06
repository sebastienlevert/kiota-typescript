import {BaseCollectionPaginationCountResponse, DeviceConfigurationState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceConfigurationState[];
}
