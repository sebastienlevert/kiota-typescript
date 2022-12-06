import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartLineFormat extends Entity, Partial<Parsable> {
    /** HTML color code representing the color of lines in the chart. */
    color?: string;
}
