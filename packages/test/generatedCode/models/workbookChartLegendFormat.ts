import {Entity, WorkbookChartFill, WorkbookChartFont} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartLegendFormat extends Entity, Partial<Parsable> {
    /** Represents the fill format of an object, which includes background formating information. Read-only. */
    fill?: WorkbookChartFill;
    /** Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only. */
    font?: WorkbookChartFont;
}
