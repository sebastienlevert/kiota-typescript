import {GetDeviceManagementIntentSettingsReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody(getDeviceManagementIntentSettingsReportPostRequestBody: GetDeviceManagementIntentSettingsReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getDeviceManagementIntentSettingsReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getDeviceManagementIntentSettingsReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getDeviceManagementIntentSettingsReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getDeviceManagementIntentSettingsReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getDeviceManagementIntentSettingsReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getDeviceManagementIntentSettingsReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getDeviceManagementIntentSettingsReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getDeviceManagementIntentSettingsReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getDeviceManagementIntentSettingsReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
