import {Entity, WorkbookChartFill, WorkbookChartFont} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartDataLabelFormat extends Entity, Partial<Parsable> {
    /** Represents the fill format of the current chart data label. Read-only. */
    fill?: WorkbookChartFill;
    /** Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only. */
    font?: WorkbookChartFont;
}
