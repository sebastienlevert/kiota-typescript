import {WorkbookChartSeriesCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookChartSeries} from './serializeWorkbookChartSeries';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeriesCollectionResponse(writer: SerializationWriter, workbookChartSeriesCollectionResponse: WorkbookChartSeriesCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartSeriesCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookChartSeriesCollectionResponse.value as any, serializeWorkbookChartSeries);
}
