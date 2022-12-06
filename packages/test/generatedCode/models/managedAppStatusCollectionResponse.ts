import {BaseCollectionPaginationCountResponse, ManagedAppStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppStatus[];
}
