import {BaseCollectionPaginationCountResponse, DeviceCompliancePolicySettingStateSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicySettingStateSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceCompliancePolicySettingStateSummary[];
}
