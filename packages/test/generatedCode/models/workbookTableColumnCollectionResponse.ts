import {BaseCollectionPaginationCountResponse, WorkbookTableColumn} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableColumnCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookTableColumn[];
}
