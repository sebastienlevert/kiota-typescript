import {BaseCollectionPaginationCountResponse, DeviceCompliancePolicySettingState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicySettingStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceCompliancePolicySettingState[];
}
