import {Entity, WorkbookChartFill, WorkbookChartLineFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeriesFormat extends Entity, Partial<Parsable> {
    /** Represents the fill format of a chart series, which includes background formating information. Read-only. */
    fill?: WorkbookChartFill;
    /** Represents line formatting. Read-only. */
    line?: WorkbookChartLineFormat;
}
