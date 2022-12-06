import {GetReportFiltersPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetReportFiltersPostRequestBody(writer: SerializationWriter, getReportFiltersPostRequestBody: GetReportFiltersPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("filter", getReportFiltersPostRequestBody.filter);
            writer.writeCollectionOfPrimitiveValues<string>("groupBy", getReportFiltersPostRequestBody.groupBy);
            writer.writeStringValue("name", getReportFiltersPostRequestBody.name);
            writer.writeCollectionOfPrimitiveValues<string>("orderBy", getReportFiltersPostRequestBody.orderBy);
            writer.writeStringValue("search", getReportFiltersPostRequestBody.search);
            writer.writeCollectionOfPrimitiveValues<string>("select", getReportFiltersPostRequestBody.select);
            writer.writeStringValue("sessionId", getReportFiltersPostRequestBody.sessionId);
            writer.writeNumberValue("skip", getReportFiltersPostRequestBody.skip);
            writer.writeNumberValue("top", getReportFiltersPostRequestBody.top);
}
