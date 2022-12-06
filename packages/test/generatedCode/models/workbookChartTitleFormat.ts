import {Entity, WorkbookChartFill, WorkbookChartFont} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartTitleFormat extends Entity, Partial<Parsable> {
    /** Represents the fill format of an object, which includes background formatting information. Read-only. */
    fill?: WorkbookChartFill;
    /** Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only. */
    font?: WorkbookChartFont;
}
