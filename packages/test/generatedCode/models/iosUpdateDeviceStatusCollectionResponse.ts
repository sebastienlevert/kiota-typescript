import {BaseCollectionPaginationCountResponse, IosUpdateDeviceStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosUpdateDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosUpdateDeviceStatus[];
}
