import {GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody(getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody: GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
