import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosNotificationSettings} from './deserializeIntoIosNotificationSettings';
import {IosNotificationSettingsCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosNotificationSettingsCollectionResponse(iosNotificationSettingsCollectionResponse: IosNotificationSettingsCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosNotificationSettingsCollectionResponse),
        "value": n => { iosNotificationSettingsCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosNotificationSettings) as any ; },
    }
}
