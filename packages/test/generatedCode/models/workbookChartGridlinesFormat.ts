import {Entity, WorkbookChartLineFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartGridlinesFormat extends Entity, Partial<Parsable> {
    /** Represents chart line formatting. Read-only. */
    line?: WorkbookChartLineFormat;
}
