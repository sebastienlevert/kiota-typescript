import {GetCachedReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetCachedReportPostRequestBody(getCachedReportPostRequestBody: GetCachedReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "groupBy": n => { getCachedReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "id": n => { getCachedReportPostRequestBody.id = n.getStringValue() as any ; },
        "orderBy": n => { getCachedReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getCachedReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getCachedReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "skip": n => { getCachedReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getCachedReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
