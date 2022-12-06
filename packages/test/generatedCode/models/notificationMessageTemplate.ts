import {Entity, LocalizedNotificationMessage} from './index';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplate extends Entity, Partial<Parsable> {
    /** Branding Options for the Message Template. Branding is defined in the Intune Admin Console. */
    brandingOptions?: NotificationTemplateBrandingOptions;
    /** The default locale to fallback onto when the requested locale is not available. */
    defaultLocale?: string;
    /** Display name for the Notification Message Template. */
    displayName?: string;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?: Date;
    /** The list of localized messages for this Notification Message Template. */
    localizedNotificationMessages?: LocalizedNotificationMessage[];
}
