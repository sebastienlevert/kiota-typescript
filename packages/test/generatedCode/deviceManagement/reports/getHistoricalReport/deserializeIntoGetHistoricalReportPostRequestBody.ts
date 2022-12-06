import {GetHistoricalReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetHistoricalReportPostRequestBody(getHistoricalReportPostRequestBody: GetHistoricalReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getHistoricalReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getHistoricalReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getHistoricalReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getHistoricalReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getHistoricalReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getHistoricalReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "skip": n => { getHistoricalReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getHistoricalReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
