import {BaseCollectionPaginationCountResponse, DeviceComplianceActionItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceActionItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceComplianceActionItem[];
}
