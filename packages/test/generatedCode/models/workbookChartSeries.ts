import {Entity, WorkbookChartPoint, WorkbookChartSeriesFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeries extends Entity, Partial<Parsable> {
    /** Represents the formatting of a chart series, which includes fill and line formatting. Read-only. */
    format?: WorkbookChartSeriesFormat;
    /** Represents the name of a series in a chart. */
    name?: string;
    /** Represents a collection of all points in the series. Read-only. */
    points?: WorkbookChartPoint[];
}
