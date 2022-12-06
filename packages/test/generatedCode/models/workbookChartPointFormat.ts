import {Entity, WorkbookChartFill} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPointFormat extends Entity, Partial<Parsable> {
    /** Represents the fill format of a chart, which includes background formating information. Read-only. */
    fill?: WorkbookChartFill;
}
