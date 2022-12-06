import {Entity, MimeContent, MobileAppAssignment, MobileAppCategory} from './index';
import {MobileAppPublishingState} from './mobileAppPublishingState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileApp extends Entity, Partial<Parsable> {
    /** The list of group assignments for this mobile app. */
    assignments?: MobileAppAssignment[];
    /** The list of categories for this app. */
    categories?: MobileAppCategory[];
    /** The date and time the app was created. */
    createdDateTime?: Date;
    /** The description of the app. */
    description?: string;
    /** The developer of the app. */
    developer?: string;
    /** The admin provided or imported title of the app. */
    displayName?: string;
    /** The more information Url. */
    informationUrl?: string;
    /** The value indicating whether the app is marked as featured by the admin. */
    isFeatured?: boolean;
    /** The large icon, to be displayed in the app details and used for upload of the icon. */
    largeIcon?: MimeContent;
    /** The date and time the app was last modified. */
    lastModifiedDateTime?: Date;
    /** Notes for the app. */
    notes?: string;
    /** The owner of the app. */
    owner?: string;
    /** The privacy statement Url. */
    privacyInformationUrl?: string;
    /** The publisher of the app. */
    publisher?: string;
    /** Indicates the publishing state of an app. */
    publishingState?: MobileAppPublishingState;
}
