import {Entity, WorkbookChartAxis} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxes extends Entity, Partial<Parsable> {
    /** Represents the category axis in a chart. Read-only. */
    categoryAxis?: WorkbookChartAxis;
    /** Represents the series axis of a 3-dimensional chart. Read-only. */
    seriesAxis?: WorkbookChartAxis;
    /** Represents the value axis in an axis. Read-only. */
    valueAxis?: WorkbookChartAxis;
}
