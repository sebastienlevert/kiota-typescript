import {BaseCollectionPaginationCountResponse, WorkbookPivotTable} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookPivotTableCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookPivotTable[];
}
