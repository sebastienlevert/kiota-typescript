import {GetPolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody(getPolicyNonComplianceSummaryReportPostRequestBody: GetPolicyNonComplianceSummaryReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getPolicyNonComplianceSummaryReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getPolicyNonComplianceSummaryReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getPolicyNonComplianceSummaryReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getPolicyNonComplianceSummaryReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getPolicyNonComplianceSummaryReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getPolicyNonComplianceSummaryReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getPolicyNonComplianceSummaryReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getPolicyNonComplianceSummaryReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getPolicyNonComplianceSummaryReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
