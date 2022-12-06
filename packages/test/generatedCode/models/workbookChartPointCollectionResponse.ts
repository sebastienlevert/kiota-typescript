import {BaseCollectionPaginationCountResponse, WorkbookChartPoint} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPointCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookChartPoint[];
}
