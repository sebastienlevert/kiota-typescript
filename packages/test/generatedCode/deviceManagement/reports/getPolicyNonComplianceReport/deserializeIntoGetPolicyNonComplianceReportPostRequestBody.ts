import {GetPolicyNonComplianceReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPolicyNonComplianceReportPostRequestBody(getPolicyNonComplianceReportPostRequestBody: GetPolicyNonComplianceReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getPolicyNonComplianceReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getPolicyNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getPolicyNonComplianceReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getPolicyNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getPolicyNonComplianceReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getPolicyNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getPolicyNonComplianceReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getPolicyNonComplianceReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getPolicyNonComplianceReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
