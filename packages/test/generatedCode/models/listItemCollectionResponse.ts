import {BaseCollectionPaginationCountResponse, ListItem} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ListItem[];
}
