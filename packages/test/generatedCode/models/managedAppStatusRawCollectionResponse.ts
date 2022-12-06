import {BaseCollectionPaginationCountResponse, ManagedAppStatusRaw} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusRawCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppStatusRaw[];
}
