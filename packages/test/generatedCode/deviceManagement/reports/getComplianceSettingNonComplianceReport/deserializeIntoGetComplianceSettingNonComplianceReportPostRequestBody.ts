import {GetComplianceSettingNonComplianceReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody(getComplianceSettingNonComplianceReportPostRequestBody: GetComplianceSettingNonComplianceReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getComplianceSettingNonComplianceReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getComplianceSettingNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getComplianceSettingNonComplianceReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getComplianceSettingNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getComplianceSettingNonComplianceReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getComplianceSettingNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getComplianceSettingNonComplianceReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getComplianceSettingNonComplianceReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getComplianceSettingNonComplianceReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
