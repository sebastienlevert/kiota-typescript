import {BaseCollectionPaginationCountResponse, WorkbookChartSeries} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeriesCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookChartSeries[];
}
