import {WorkbookChartPointCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookChartPoint} from './serializeWorkbookChartPoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartPointCollectionResponse(writer: SerializationWriter, workbookChartPointCollectionResponse: WorkbookChartPointCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartPointCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookChartPointCollectionResponse.value as any, serializeWorkbookChartPoint);
}
