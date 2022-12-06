import {BaseCollectionPaginationCountResponse, DeviceConfigurationUserStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationUserStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceConfigurationUserStatus[];
}
