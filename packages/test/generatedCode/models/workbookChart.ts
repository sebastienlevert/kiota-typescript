import {Entity, WorkbookChartAreaFormat, WorkbookChartAxes, WorkbookChartDataLabels, WorkbookChartLegend, WorkbookChartSeries, WorkbookChartTitle, WorkbookWorksheet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChart extends Entity, Partial<Parsable> {
    /** The axes property */
    axes?: WorkbookChartAxes;
    /** The dataLabels property */
    dataLabels?: WorkbookChartDataLabels;
    /** The format property */
    format?: WorkbookChartAreaFormat;
    /** Represents the height, in points, of the chart object. */
    height?: number;
    /** The distance, in points, from the left side of the chart to the worksheet origin. */
    left?: number;
    /** The legend property */
    legend?: WorkbookChartLegend;
    /** Represents the name of a chart object. */
    name?: string;
    /** Represents either a single series or collection of series in the chart. Read-only. */
    series?: WorkbookChartSeries[];
    /** The title property */
    title?: WorkbookChartTitle;
    /** Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart). */
    top?: number;
    /** Represents the width, in points, of the chart object. */
    width?: number;
    /** The worksheet property */
    worksheet?: WorkbookWorksheet;
}
