import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocalizedNotificationMessage extends Entity, Partial<Parsable> {
    /** Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message. */
    isDefault?: boolean;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?: Date;
    /** The Locale for which this message is destined. */
    locale?: string;
    /** The Message Template content. */
    messageTemplate?: string;
    /** The Message Template Subject. */
    subject?: string;
}
