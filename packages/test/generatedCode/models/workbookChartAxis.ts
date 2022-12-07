import {Entity, Json, WorkbookChartAxisFormat, WorkbookChartAxisTitle, WorkbookChartGridlines} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxis extends Entity, Partial<Parsable> {
    /** The format property */
    format?: WorkbookChartAxisFormat;
    /** The majorGridlines property */
    majorGridlines?: WorkbookChartGridlines;
    /** The majorUnit property */
    majorUnit?: Json;
    /** The maximum property */
    maximum?: Json;
    /** The minimum property */
    minimum?: Json;
    /** The minorGridlines property */
    minorGridlines?: WorkbookChartGridlines;
    /** The minorUnit property */
    minorUnit?: Json;
    /** The title property */
    title?: WorkbookChartAxisTitle;
}
