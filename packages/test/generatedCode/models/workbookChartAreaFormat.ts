import {Entity, WorkbookChartFill, WorkbookChartFont} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAreaFormat extends Entity, Partial<Parsable> {
    /** The fill property */
    fill?: WorkbookChartFill;
    /** The font property */
    font?: WorkbookChartFont;
}
