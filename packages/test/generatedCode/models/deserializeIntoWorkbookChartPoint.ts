import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {deserializeIntoWorkbookChartPointFormat} from './deserializeIntoWorkbookChartPointFormat';
import {WorkbookChartPoint} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartPoint(workbookChartPoint: WorkbookChartPoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartPoint),
        "format": n => { workbookChartPoint.format = n.getObject(deserializeIntoWorkbookChartPointFormat) as any ; },
        "value": n => { workbookChartPoint.value = n.getObject(deserializeIntoJson) as any ; },
    }
}
