import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartAreaFormat} from './deserializeIntoWorkbookChartAreaFormat';
import {deserializeIntoWorkbookChartAxes} from './deserializeIntoWorkbookChartAxes';
import {deserializeIntoWorkbookChartDataLabels} from './deserializeIntoWorkbookChartDataLabels';
import {deserializeIntoWorkbookChartLegend} from './deserializeIntoWorkbookChartLegend';
import {deserializeIntoWorkbookChartSeries} from './deserializeIntoWorkbookChartSeries';
import {deserializeIntoWorkbookChartTitle} from './deserializeIntoWorkbookChartTitle';
import {deserializeIntoWorkbookWorksheet} from './deserializeIntoWorkbookWorksheet';
import {WorkbookChart} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChart(workbookChart: WorkbookChart | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChart),
        "axes": n => { workbookChart.axes = n.getObject(deserializeIntoWorkbookChartAxes) as any ; },
        "dataLabels": n => { workbookChart.dataLabels = n.getObject(deserializeIntoWorkbookChartDataLabels) as any ; },
        "format": n => { workbookChart.format = n.getObject(deserializeIntoWorkbookChartAreaFormat) as any ; },
        "height": n => { workbookChart.height = n.getNumberValue() as any ; },
        "left": n => { workbookChart.left = n.getNumberValue() as any ; },
        "legend": n => { workbookChart.legend = n.getObject(deserializeIntoWorkbookChartLegend) as any ; },
        "name": n => { workbookChart.name = n.getStringValue() as any ; },
        "series": n => { workbookChart.series = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookChartSeries) as any ; },
        "title": n => { workbookChart.title = n.getObject(deserializeIntoWorkbookChartTitle) as any ; },
        "top": n => { workbookChart.top = n.getNumberValue() as any ; },
        "width": n => { workbookChart.width = n.getNumberValue() as any ; },
        "worksheet": n => { workbookChart.worksheet = n.getObject(deserializeIntoWorkbookWorksheet) as any ; },
    }
}
