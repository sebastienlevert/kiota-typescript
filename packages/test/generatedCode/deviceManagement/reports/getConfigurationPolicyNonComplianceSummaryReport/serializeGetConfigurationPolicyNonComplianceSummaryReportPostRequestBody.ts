import {GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody(writer: SerializationWriter, getConfigurationPolicyNonComplianceSummaryReportPostRequestBody: GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("filter", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.filter);
            writer.writeCollectionOfPrimitiveValues<string>("groupBy", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.groupBy);
            writer.writeStringValue("name", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.name);
            writer.writeCollectionOfPrimitiveValues<string>("orderBy", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.orderBy);
            writer.writeStringValue("search", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.search);
            writer.writeCollectionOfPrimitiveValues<string>("select", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.select);
            writer.writeStringValue("sessionId", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.sessionId);
            writer.writeNumberValue("skip", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.skip);
            writer.writeNumberValue("top", getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.top);
}
