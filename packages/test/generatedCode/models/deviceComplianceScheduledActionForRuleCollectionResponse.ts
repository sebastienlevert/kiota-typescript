import {BaseCollectionPaginationCountResponse, DeviceComplianceScheduledActionForRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceScheduledActionForRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceComplianceScheduledActionForRule[];
}
