import {GetConfigurationSettingNonComplianceReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody(getConfigurationSettingNonComplianceReportPostRequestBody: GetConfigurationSettingNonComplianceReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getConfigurationSettingNonComplianceReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getConfigurationSettingNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getConfigurationSettingNonComplianceReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getConfigurationSettingNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getConfigurationSettingNonComplianceReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getConfigurationSettingNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getConfigurationSettingNonComplianceReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getConfigurationSettingNonComplianceReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getConfigurationSettingNonComplianceReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
