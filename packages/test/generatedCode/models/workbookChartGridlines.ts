import {Entity, WorkbookChartGridlinesFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartGridlines extends Entity, Partial<Parsable> {
    /** Represents the formatting of chart gridlines. Read-only. */
    format?: WorkbookChartGridlinesFormat;
    /** Boolean value representing if the axis gridlines are visible or not. */
    visible?: boolean;
}
