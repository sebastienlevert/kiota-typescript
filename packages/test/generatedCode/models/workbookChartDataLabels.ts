import {Entity, WorkbookChartDataLabelFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartDataLabels extends Entity, Partial<Parsable> {
    /** The format property */
    format?: WorkbookChartDataLabelFormat;
    /** DataLabelPosition value that represents the position of the data label. The possible values are: None, Center, InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout. */
    position?: string;
    /** String representing the separator used for the data labels on a chart. */
    separator?: string;
    /** Boolean value representing if the data label bubble size is visible or not. */
    showBubbleSize?: boolean;
    /** Boolean value representing if the data label category name is visible or not. */
    showCategoryName?: boolean;
    /** Boolean value representing if the data label legend key is visible or not. */
    showLegendKey?: boolean;
    /** Boolean value representing if the data label percentage is visible or not. */
    showPercentage?: boolean;
    /** Boolean value representing if the data label series name is visible or not. */
    showSeriesName?: boolean;
    /** Boolean value representing if the data label value is visible or not. */
    showValue?: boolean;
}
