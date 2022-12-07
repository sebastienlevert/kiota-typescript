import {CalendarColor} from './calendarColor';
import {CalendarPermission, EmailAddress, Entity, Event, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Calendar extends Entity, Partial<Parsable> {
    /** Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness. */
    allowedOnlineMeetingProviders?: OnlineMeetingProviderType[];
    /** The calendarGroup in which to create the calendar. If the user has never explicitly set a group for the calendar, this property is  null. */
    calendarGroupId?: string;
    /** The permissions of the users with whom the calendar is shared. */
    calendarPermissions?: CalendarPermission[];
    /** The calendar view for the calendar. Navigation property. Read-only. */
    calendarView?: Event[];
    /** true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only. */
    canEdit?: boolean;
    /** true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only. */
    canShare?: boolean;
    /** true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only. */
    canViewPrivateItems?: boolean;
    /** Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
    changeKey?: string;
    /** The color property */
    color?: CalendarColor;
    /** The defaultOnlineMeetingProvider property */
    defaultOnlineMeetingProvider?: OnlineMeetingProviderType;
    /** The events in the calendar. Navigation property. Read-only. */
    events?: Event[];
    /** The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty. */
    hexColor?: string;
    /** true if this is the default calendar where new events are created by default, false otherwise. */
    isDefaultCalendar?: boolean;
    /** Indicates whether this user calendar can be deleted from the user mailbox. */
    isRemovable?: boolean;
    /** true if the user has shared the calendar with other users, false otherwise. Since only the user who created the calendar can share it, isShared and isSharedWithMe cannot be true for the same user. This property is set when sharing is initiated in an Outlook client, and can be reset when the sharing is cancelled through the client or the corresponding calendarPermission resource. Read-only. */
    isShared?: boolean;
    /** true if the user has been shared this calendar, false otherwise. This property is always false for a calendar owner. This property is set when sharing is initiated in an Outlook client, and can be reset when the sharing is cancelled through the client or the corresponding calendarPermission resource. Read-only. */
    isSharedWithMe?: boolean;
    /** Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses. */
    isTallyingResponses?: boolean;
    /** The collection of multi-value extended properties defined for the calendar. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The calendar name. */
    name?: string;
    /** The owner property */
    owner?: EmailAddress;
    /** The collection of single-value extended properties defined for the calendar. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
}
