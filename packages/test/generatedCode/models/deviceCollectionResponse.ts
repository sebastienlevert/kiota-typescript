import {BaseCollectionPaginationCountResponse, Device} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Device[];
}
