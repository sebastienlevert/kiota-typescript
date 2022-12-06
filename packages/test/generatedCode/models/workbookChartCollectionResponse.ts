import {BaseCollectionPaginationCountResponse, WorkbookChart} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookChart[];
}
