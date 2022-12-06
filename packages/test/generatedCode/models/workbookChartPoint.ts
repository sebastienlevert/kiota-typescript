import {Entity, Json, WorkbookChartPointFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPoint extends Entity, Partial<Parsable> {
    /** Encapsulates the format properties chart point. Read-only. */
    format?: WorkbookChartPointFormat;
    /** Returns the value of a chart point. Read-only. */
    value?: Json;
}
