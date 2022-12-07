import {Entity, WorkbookChartAxis} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxes extends Entity, Partial<Parsable> {
    /** The categoryAxis property */
    categoryAxis?: WorkbookChartAxis;
    /** The seriesAxis property */
    seriesAxis?: WorkbookChartAxis;
    /** The valueAxis property */
    valueAxis?: WorkbookChartAxis;
}
