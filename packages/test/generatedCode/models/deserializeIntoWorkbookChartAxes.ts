import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartAxis} from './deserializeIntoWorkbookChartAxis';
import {WorkbookChartAxes} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxes(workbookChartAxes: WorkbookChartAxes | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxes),
        "categoryAxis": n => { workbookChartAxes.categoryAxis = n.getObject(deserializeIntoWorkbookChartAxis) as any ; },
        "seriesAxis": n => { workbookChartAxes.seriesAxis = n.getObject(deserializeIntoWorkbookChartAxis) as any ; },
        "valueAxis": n => { workbookChartAxes.valueAxis = n.getObject(deserializeIntoWorkbookChartAxis) as any ; },
    }
}
