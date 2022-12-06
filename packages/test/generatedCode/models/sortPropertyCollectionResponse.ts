import {BaseCollectionPaginationCountResponse, SortProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SortPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SortProperty[];
}
