import {BaseCollectionPaginationCountResponse, WorkbookSortField} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookSortFieldCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookSortField[];
}
