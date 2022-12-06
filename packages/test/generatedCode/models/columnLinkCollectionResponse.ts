import {BaseCollectionPaginationCountResponse, ColumnLink} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnLinkCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ColumnLink[];
}
