import {Entity, WorkbookChartFont, WorkbookChartLineFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisFormat extends Entity, Partial<Parsable> {
    /** Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only. */
    font?: WorkbookChartFont;
    /** Represents chart line formatting. Read-only. */
    line?: WorkbookChartLineFormat;
}
