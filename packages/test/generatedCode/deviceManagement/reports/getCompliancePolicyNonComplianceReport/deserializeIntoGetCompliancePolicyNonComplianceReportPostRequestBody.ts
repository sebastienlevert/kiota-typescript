import {GetCompliancePolicyNonComplianceReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody(getCompliancePolicyNonComplianceReportPostRequestBody: GetCompliancePolicyNonComplianceReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getCompliancePolicyNonComplianceReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getCompliancePolicyNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getCompliancePolicyNonComplianceReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getCompliancePolicyNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getCompliancePolicyNonComplianceReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getCompliancePolicyNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getCompliancePolicyNonComplianceReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getCompliancePolicyNonComplianceReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getCompliancePolicyNonComplianceReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
