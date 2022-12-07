import {Entity, WorkbookChartFill} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPointFormat extends Entity, Partial<Parsable> {
    /** The fill property */
    fill?: WorkbookChartFill;
}
