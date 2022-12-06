import {GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody(getConfigurationPolicyNonComplianceSummaryReportPostRequestBody: GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
