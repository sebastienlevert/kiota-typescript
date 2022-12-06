import {WorkbookChartCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookChart} from './serializeWorkbookChart';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartCollectionResponse(writer: SerializationWriter, workbookChartCollectionResponse: WorkbookChartCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookChartCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", workbookChartCollectionResponse.value as any, serializeWorkbookChart);
}
