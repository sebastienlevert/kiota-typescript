import {Entity, WorkbookChartAxisTitleFormat} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxisTitle extends Entity, Partial<Parsable> {
    /** The format property */
    format?: WorkbookChartAxisTitleFormat;
    /** Represents the axis title. */
    text?: string;
    /** A boolean that specifies the visibility of an axis title. */
    visible?: boolean;
}
