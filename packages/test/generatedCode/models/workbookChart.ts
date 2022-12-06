import {Entity, WorkbookChartAreaFormat, WorkbookChartAxes, WorkbookChartDataLabels, WorkbookChartLegend, WorkbookChartSeries, WorkbookChartTitle, WorkbookWorksheet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChart extends Entity, Partial<Parsable> {
    /** Represents chart axes. Read-only. */
    axes?: WorkbookChartAxes;
    /** Represents the datalabels on the chart. Read-only. */
    dataLabels?: WorkbookChartDataLabels;
    /** Encapsulates the format properties for the chart area. Read-only. */
    format?: WorkbookChartAreaFormat;
    /** Represents the height, in points, of the chart object. */
    height?: number;
    /** The distance, in points, from the left side of the chart to the worksheet origin. */
    left?: number;
    /** Represents the legend for the chart. Read-only. */
    legend?: WorkbookChartLegend;
    /** Represents the name of a chart object. */
    name?: string;
    /** Represents either a single series or collection of series in the chart. Read-only. */
    series?: WorkbookChartSeries[];
    /** Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only. */
    title?: WorkbookChartTitle;
    /** Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart). */
    top?: number;
    /** Represents the width, in points, of the chart object. */
    width?: number;
    /** The worksheet containing the current chart. Read-only. */
    worksheet?: WorkbookWorksheet;
}
