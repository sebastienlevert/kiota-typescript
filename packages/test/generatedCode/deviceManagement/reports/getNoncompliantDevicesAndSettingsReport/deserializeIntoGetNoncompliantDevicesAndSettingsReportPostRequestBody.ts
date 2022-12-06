import {GetNoncompliantDevicesAndSettingsReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody(getNoncompliantDevicesAndSettingsReportPostRequestBody: GetNoncompliantDevicesAndSettingsReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
