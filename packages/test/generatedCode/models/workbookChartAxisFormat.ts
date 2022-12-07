import {Entity, WorkbookChartFont, WorkbookChartLineFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisFormat extends Entity, Partial<Parsable> {
    /** The font property */
    font?: WorkbookChartFont;
    /** The line property */
    line?: WorkbookChartLineFormat;
}
