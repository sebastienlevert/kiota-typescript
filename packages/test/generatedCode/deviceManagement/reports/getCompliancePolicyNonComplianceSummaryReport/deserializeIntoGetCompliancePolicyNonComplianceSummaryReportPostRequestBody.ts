import {GetCompliancePolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetCompliancePolicyNonComplianceSummaryReportPostRequestBody(getCompliancePolicyNonComplianceSummaryReportPostRequestBody: GetCompliancePolicyNonComplianceSummaryReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
