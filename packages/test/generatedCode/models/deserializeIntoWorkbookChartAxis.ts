import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {deserializeIntoWorkbookChartAxisFormat} from './deserializeIntoWorkbookChartAxisFormat';
import {deserializeIntoWorkbookChartAxisTitle} from './deserializeIntoWorkbookChartAxisTitle';
import {deserializeIntoWorkbookChartGridlines} from './deserializeIntoWorkbookChartGridlines';
import {WorkbookChartAxis} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxis(workbookChartAxis: WorkbookChartAxis | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxis),
        "format": n => { workbookChartAxis.format = n.getObject(deserializeIntoWorkbookChartAxisFormat) as any ; },
        "majorGridlines": n => { workbookChartAxis.majorGridlines = n.getObject(deserializeIntoWorkbookChartGridlines) as any ; },
        "majorUnit": n => { workbookChartAxis.majorUnit = n.getObject(deserializeIntoJson) as any ; },
        "maximum": n => { workbookChartAxis.maximum = n.getObject(deserializeIntoJson) as any ; },
        "minimum": n => { workbookChartAxis.minimum = n.getObject(deserializeIntoJson) as any ; },
        "minorGridlines": n => { workbookChartAxis.minorGridlines = n.getObject(deserializeIntoWorkbookChartGridlines) as any ; },
        "minorUnit": n => { workbookChartAxis.minorUnit = n.getObject(deserializeIntoJson) as any ; },
        "title": n => { workbookChartAxis.title = n.getObject(deserializeIntoWorkbookChartAxisTitle) as any ; },
    }
}
