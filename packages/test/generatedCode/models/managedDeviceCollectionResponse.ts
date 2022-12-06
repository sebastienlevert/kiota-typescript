import {BaseCollectionPaginationCountResponse, ManagedDevice} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedDevice[];
}
