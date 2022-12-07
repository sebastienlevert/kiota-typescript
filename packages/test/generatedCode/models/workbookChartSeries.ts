import {Entity, WorkbookChartPoint, WorkbookChartSeriesFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeries extends Entity, Partial<Parsable> {
    /** The format property */
    format?: WorkbookChartSeriesFormat;
    /** Represents the name of a series in a chart. */
    name?: string;
    /** Represents a collection of all points in the series. Read-only. */
    points?: WorkbookChartPoint[];
}
