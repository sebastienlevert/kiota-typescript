import {GetConfigurationPolicyNonComplianceReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetConfigurationPolicyNonComplianceReportPostRequestBody(getConfigurationPolicyNonComplianceReportPostRequestBody: GetConfigurationPolicyNonComplianceReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
