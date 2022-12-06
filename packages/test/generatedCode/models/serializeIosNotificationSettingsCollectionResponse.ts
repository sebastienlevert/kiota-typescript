import {IosNotificationSettingsCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosNotificationSettings} from './serializeIosNotificationSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosNotificationSettingsCollectionResponse(writer: SerializationWriter, iosNotificationSettingsCollectionResponse: IosNotificationSettingsCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosNotificationSettingsCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosNotificationSettingsCollectionResponse.value as any, serializeIosNotificationSettings);
}
