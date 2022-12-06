import {Entity, WorkbookChartFont} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisTitleFormat extends Entity, Partial<Parsable> {
    /** Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only. */
    font?: WorkbookChartFont;
}
