import {EventType} from './eventType';
import {FreeBusyStatus} from './freeBusyStatus';
import {Importance} from './importance';
import {Attachment, Attendee, Calendar, DateTimeTimeZone, Extension, ItemBody, Location, MultiValueLegacyExtendedProperty, OnlineMeetingInfo, OutlookItem, PatternedRecurrence, Recipient, ResponseStatus, SingleValueLegacyExtendedProperty} from './index';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {Sensitivity} from './sensitivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Event extends OutlookItem, Partial<Parsable> {
    /** true if the meeting organizer allows invitees to propose a new time when responding; otherwise false. Optional. Default is true. */
    allowNewTimeProposals?: boolean;
    /** The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable. */
    attachments?: Attachment[];
    /** The collection of attendees for the event. */
    attendees?: Attendee[];
    /** The body property */
    body?: ItemBody;
    /** The preview of the message associated with the event. It is in text format. */
    bodyPreview?: string;
    /** The calendar property */
    calendar?: Calendar;
    /** Contains occurrenceId property values of cancelled instances in a recurring series, if the event is the series master. Instances in a recurring series that are cancelled are called cancelledOccurences.Returned only on $select in a Get operation which specifies the id of a series master event (that is, the seriesMasterId property value). */
    cancelledOccurrences?: string[];
    /** The end property */
    end?: DateTimeTimeZone;
    /** The exceptionOccurrences property */
    exceptionOccurrences?: Event[];
    /** The collection of open extensions defined for the event. Nullable. */
    extensions?: Extension[];
    /** Set to true if the event has attachments. */
    hasAttachments?: boolean;
    /** When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false. */
    hideAttendees?: boolean;
    /** The importance property */
    importance?: Importance;
    /** The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable. */
    instances?: Event[];
    /** The isAllDay property */
    isAllDay?: boolean;
    /** The isCancelled property */
    isCancelled?: boolean;
    /** The isDraft property */
    isDraft?: boolean;
    /** The isOnlineMeeting property */
    isOnlineMeeting?: boolean;
    /** The isOrganizer property */
    isOrganizer?: boolean;
    /** The isReminderOn property */
    isReminderOn?: boolean;
    /** The location property */
    location?: Location;
    /** The locations property */
    locations?: Location[];
    /** The collection of multi-value extended properties defined for the event. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The occurrenceId property */
    occurrenceId?: string;
    /** The onlineMeeting property */
    onlineMeeting?: OnlineMeetingInfo;
    /** The onlineMeetingProvider property */
    onlineMeetingProvider?: OnlineMeetingProviderType;
    /** The onlineMeetingUrl property */
    onlineMeetingUrl?: string;
    /** The organizer property */
    organizer?: Recipient;
    /** The originalEndTimeZone property */
    originalEndTimeZone?: string;
    /** The originalStart property */
    originalStart?: Date;
    /** The originalStartTimeZone property */
    originalStartTimeZone?: string;
    /** The recurrence property */
    recurrence?: PatternedRecurrence;
    /** The reminderMinutesBeforeStart property */
    reminderMinutesBeforeStart?: number;
    /** The responseRequested property */
    responseRequested?: boolean;
    /** The responseStatus property */
    responseStatus?: ResponseStatus;
    /** The sensitivity property */
    sensitivity?: Sensitivity;
    /** The seriesMasterId property */
    seriesMasterId?: string;
    /** The showAs property */
    showAs?: FreeBusyStatus;
    /** The collection of single-value extended properties defined for the event. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    /** The start property */
    start?: DateTimeTimeZone;
    /** The subject property */
    subject?: string;
    /** The transactionId property */
    transactionId?: string;
    /** The type property */
    type?: EventType;
    /** The uid property */
    uid?: string;
    /** The webLink property */
    webLink?: string;
}
