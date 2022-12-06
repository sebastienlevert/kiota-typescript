import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoLocalizedNotificationMessage} from './deserializeIntoLocalizedNotificationMessage';
import {NotificationMessageTemplate} from './index';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotificationMessageTemplate(notificationMessageTemplate: NotificationMessageTemplate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(notificationMessageTemplate),
        "brandingOptions": n => { notificationMessageTemplate.brandingOptions = n.getEnumValue<NotificationTemplateBrandingOptions>(NotificationTemplateBrandingOptions) as any ; },
        "defaultLocale": n => { notificationMessageTemplate.defaultLocale = n.getStringValue() as any ; },
        "displayName": n => { notificationMessageTemplate.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { notificationMessageTemplate.lastModifiedDateTime = n.getDateValue() as any ; },
        "localizedNotificationMessages": n => { notificationMessageTemplate.localizedNotificationMessages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocalizedNotificationMessage) as any ; },
    }
}
