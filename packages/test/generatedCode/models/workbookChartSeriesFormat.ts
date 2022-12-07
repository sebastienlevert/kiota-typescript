import {Entity, WorkbookChartFill, WorkbookChartLineFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeriesFormat extends Entity, Partial<Parsable> {
    /** The fill property */
    fill?: WorkbookChartFill;
    /** The line property */
    line?: WorkbookChartLineFormat;
}
