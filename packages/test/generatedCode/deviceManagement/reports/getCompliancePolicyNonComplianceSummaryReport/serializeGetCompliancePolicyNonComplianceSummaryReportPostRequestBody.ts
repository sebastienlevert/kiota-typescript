import {GetCompliancePolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetCompliancePolicyNonComplianceSummaryReportPostRequestBody(writer: SerializationWriter, getCompliancePolicyNonComplianceSummaryReportPostRequestBody: GetCompliancePolicyNonComplianceSummaryReportPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("filter", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.filter);
            writer.writeCollectionOfPrimitiveValues<string>("groupBy", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.groupBy);
            writer.writeStringValue("name", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.name);
            writer.writeCollectionOfPrimitiveValues<string>("orderBy", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.orderBy);
            writer.writeStringValue("search", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.search);
            writer.writeCollectionOfPrimitiveValues<string>("select", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.select);
            writer.writeStringValue("sessionId", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.sessionId);
            writer.writeNumberValue("skip", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.skip);
            writer.writeNumberValue("top", getCompliancePolicyNonComplianceSummaryReportPostRequestBody.top);
}
