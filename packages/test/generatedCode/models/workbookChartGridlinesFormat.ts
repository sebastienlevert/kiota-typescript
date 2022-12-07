import {Entity, WorkbookChartLineFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartGridlinesFormat extends Entity, Partial<Parsable> {
    /** The line property */
    line?: WorkbookChartLineFormat;
}
