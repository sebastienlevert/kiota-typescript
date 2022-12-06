import {BaseCollectionPaginationCountResponse, DeviceComplianceSettingState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceSettingStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceComplianceSettingState[];
}
