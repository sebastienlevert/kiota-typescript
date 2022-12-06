import {BaseCollectionPaginationCountResponse, DeviceActionResult} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceActionResultCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceActionResult[];
}
