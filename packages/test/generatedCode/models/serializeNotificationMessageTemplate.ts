import {NotificationMessageTemplate} from './index';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {serializeEntity} from './serializeEntity';
import {serializeLocalizedNotificationMessage} from './serializeLocalizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotificationMessageTemplate(writer: SerializationWriter, notificationMessageTemplate: NotificationMessageTemplate | undefined = {}) : void {
        serializeEntity(writer, notificationMessageTemplate)
            writer.writeEnumValue<NotificationTemplateBrandingOptions>("brandingOptions", notificationMessageTemplate.brandingOptions);
            writer.writeStringValue("defaultLocale", notificationMessageTemplate.defaultLocale);
            writer.writeStringValue("displayName", notificationMessageTemplate.displayName);
            writer.writeDateValue("lastModifiedDateTime", notificationMessageTemplate.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("localizedNotificationMessages", notificationMessageTemplate.localizedNotificationMessages as any, serializeLocalizedNotificationMessage);
}
