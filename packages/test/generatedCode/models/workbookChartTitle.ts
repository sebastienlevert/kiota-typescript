import {Entity, WorkbookChartTitleFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartTitle extends Entity, Partial<Parsable> {
    /** The format property */
    format?: WorkbookChartTitleFormat;
    /** Boolean value representing if the chart title will overlay the chart or not. */
    overlay?: boolean;
    /** Represents the title text of a chart. */
    text?: string;
    /** A boolean value the represents the visibility of a chart title object. */
    visible?: boolean;
}
