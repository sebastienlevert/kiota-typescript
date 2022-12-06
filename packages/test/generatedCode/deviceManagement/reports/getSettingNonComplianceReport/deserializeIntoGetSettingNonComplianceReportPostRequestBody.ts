import {GetSettingNonComplianceReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetSettingNonComplianceReportPostRequestBody(getSettingNonComplianceReportPostRequestBody: GetSettingNonComplianceReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getSettingNonComplianceReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getSettingNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getSettingNonComplianceReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getSettingNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getSettingNonComplianceReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getSettingNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getSettingNonComplianceReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getSettingNonComplianceReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getSettingNonComplianceReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
