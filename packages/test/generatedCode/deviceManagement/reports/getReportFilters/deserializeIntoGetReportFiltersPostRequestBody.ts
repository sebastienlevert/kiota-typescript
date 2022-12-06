import {GetReportFiltersPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetReportFiltersPostRequestBody(getReportFiltersPostRequestBody: GetReportFiltersPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getReportFiltersPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getReportFiltersPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getReportFiltersPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getReportFiltersPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getReportFiltersPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getReportFiltersPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getReportFiltersPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getReportFiltersPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getReportFiltersPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
