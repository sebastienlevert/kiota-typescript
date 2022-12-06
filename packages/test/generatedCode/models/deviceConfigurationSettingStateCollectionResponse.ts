import {BaseCollectionPaginationCountResponse, DeviceConfigurationSettingState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationSettingStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceConfigurationSettingState[];
}
