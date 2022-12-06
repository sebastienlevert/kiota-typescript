import {BaseCollectionPaginationCountResponse, DeviceCategory} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceCategory[];
}
