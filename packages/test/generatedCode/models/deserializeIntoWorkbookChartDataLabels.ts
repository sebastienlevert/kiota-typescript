import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartDataLabelFormat} from './deserializeIntoWorkbookChartDataLabelFormat';
import {WorkbookChartDataLabels} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartDataLabels(workbookChartDataLabels: WorkbookChartDataLabels | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartDataLabels),
        "format": n => { workbookChartDataLabels.format = n.getObject(deserializeIntoWorkbookChartDataLabelFormat) as any ; },
        "position": n => { workbookChartDataLabels.position = n.getStringValue() as any ; },
        "separator": n => { workbookChartDataLabels.separator = n.getStringValue() as any ; },
        "showBubbleSize": n => { workbookChartDataLabels.showBubbleSize = n.getBooleanValue() as any ; },
        "showCategoryName": n => { workbookChartDataLabels.showCategoryName = n.getBooleanValue() as any ; },
        "showLegendKey": n => { workbookChartDataLabels.showLegendKey = n.getBooleanValue() as any ; },
        "showPercentage": n => { workbookChartDataLabels.showPercentage = n.getBooleanValue() as any ; },
        "showSeriesName": n => { workbookChartDataLabels.showSeriesName = n.getBooleanValue() as any ; },
        "showValue": n => { workbookChartDataLabels.showValue = n.getBooleanValue() as any ; },
    }
}
