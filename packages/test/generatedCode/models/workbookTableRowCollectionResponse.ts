import {BaseCollectionPaginationCountResponse, WorkbookTableRow} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableRowCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookTableRow[];
}
