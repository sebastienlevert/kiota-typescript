import {Entity, Json, WorkbookChartPointFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPoint extends Entity, Partial<Parsable> {
    /** The format property */
    format?: WorkbookChartPointFormat;
    /** The value property */
    value?: Json;
}
