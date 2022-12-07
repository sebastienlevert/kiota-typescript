import {Entity, WorkbookChartFont} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisTitleFormat extends Entity, Partial<Parsable> {
    /** The font property */
    font?: WorkbookChartFont;
}
