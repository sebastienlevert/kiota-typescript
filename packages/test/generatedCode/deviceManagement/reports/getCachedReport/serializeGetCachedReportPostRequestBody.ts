import {GetCachedReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetCachedReportPostRequestBody(writer: SerializationWriter, getCachedReportPostRequestBody: GetCachedReportPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("groupBy", getCachedReportPostRequestBody.groupBy);
            writer.writeStringValue("id", getCachedReportPostRequestBody.id);
            writer.writeCollectionOfPrimitiveValues<string>("orderBy", getCachedReportPostRequestBody.orderBy);
            writer.writeStringValue("search", getCachedReportPostRequestBody.search);
            writer.writeCollectionOfPrimitiveValues<string>("select", getCachedReportPostRequestBody.select);
            writer.writeNumberValue("skip", getCachedReportPostRequestBody.skip);
            writer.writeNumberValue("top", getCachedReportPostRequestBody.top);
}
