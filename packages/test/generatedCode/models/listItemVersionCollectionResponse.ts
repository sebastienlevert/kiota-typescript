import {BaseCollectionPaginationCountResponse, ListItemVersion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ListItemVersion[];
}
