import {Entity, WorkbookChartLegendFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartLegend extends Entity, Partial<Parsable> {
    /** The format property */
    format?: WorkbookChartLegendFormat;
    /** Boolean value for whether the chart legend should overlap with the main body of the chart. */
    overlay?: boolean;
    /** Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom. */
    position?: string;
    /** A boolean value the represents the visibility of a ChartLegend object. */
    visible?: boolean;
}
