import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoAttendee} from './deserializeIntoAttendee';
import {deserializeIntoCalendar} from './deserializeIntoCalendar';
import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoOnlineMeetingInfo} from './deserializeIntoOnlineMeetingInfo';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {deserializeIntoResponseStatus} from './deserializeIntoResponseStatus';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {EventType} from './eventType';
import {FreeBusyStatus} from './freeBusyStatus';
import {Importance} from './importance';
import {Event} from './index';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {Sensitivity} from './sensitivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEvent(event: Event | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(event),
        "allowNewTimeProposals": n => { event.allowNewTimeProposals = n.getBooleanValue() as any ; },
        "attachments": n => { event.attachments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachment) as any ; },
        "attendees": n => { event.attendees = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendee) as any ; },
        "body": n => { event.body = n.getObject(deserializeIntoItemBody) as any ; },
        "bodyPreview": n => { event.bodyPreview = n.getStringValue() as any ; },
        "calendar": n => { event.calendar = n.getObject(deserializeIntoCalendar) as any ; },
        "cancelledOccurrences": n => { event.cancelledOccurrences = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "end": n => { event.end = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "exceptionOccurrences": n => { event.exceptionOccurrences = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
        "extensions": n => { event.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "hasAttachments": n => { event.hasAttachments = n.getBooleanValue() as any ; },
        "hideAttendees": n => { event.hideAttendees = n.getBooleanValue() as any ; },
        "importance": n => { event.importance = n.getEnumValue<Importance>(Importance) as any ; },
        "instances": n => { event.instances = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
        "isAllDay": n => { event.isAllDay = n.getBooleanValue() as any ; },
        "isCancelled": n => { event.isCancelled = n.getBooleanValue() as any ; },
        "isDraft": n => { event.isDraft = n.getBooleanValue() as any ; },
        "isOnlineMeeting": n => { event.isOnlineMeeting = n.getBooleanValue() as any ; },
        "isOrganizer": n => { event.isOrganizer = n.getBooleanValue() as any ; },
        "isReminderOn": n => { event.isReminderOn = n.getBooleanValue() as any ; },
        "location": n => { event.location = n.getObject(deserializeIntoLocation) as any ; },
        "locations": n => { event.locations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocation) as any ; },
        "multiValueExtendedProperties": n => { event.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "occurrenceId": n => { event.occurrenceId = n.getStringValue() as any ; },
        "onlineMeeting": n => { event.onlineMeeting = n.getObject(deserializeIntoOnlineMeetingInfo) as any ; },
        "onlineMeetingProvider": n => { event.onlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType) as any ; },
        "onlineMeetingUrl": n => { event.onlineMeetingUrl = n.getStringValue() as any ; },
        "organizer": n => { event.organizer = n.getObject(deserializeIntoRecipient) as any ; },
        "originalEndTimeZone": n => { event.originalEndTimeZone = n.getStringValue() as any ; },
        "originalStart": n => { event.originalStart = n.getDateValue() as any ; },
        "originalStartTimeZone": n => { event.originalStartTimeZone = n.getStringValue() as any ; },
        "recurrence": n => { event.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "reminderMinutesBeforeStart": n => { event.reminderMinutesBeforeStart = n.getNumberValue() as any ; },
        "responseRequested": n => { event.responseRequested = n.getBooleanValue() as any ; },
        "responseStatus": n => { event.responseStatus = n.getObject(deserializeIntoResponseStatus) as any ; },
        "sensitivity": n => { event.sensitivity = n.getEnumValue<Sensitivity>(Sensitivity) as any ; },
        "seriesMasterId": n => { event.seriesMasterId = n.getStringValue() as any ; },
        "showAs": n => { event.showAs = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus) as any ; },
        "singleValueExtendedProperties": n => { event.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "start": n => { event.start = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "subject": n => { event.subject = n.getStringValue() as any ; },
        "transactionId": n => { event.transactionId = n.getStringValue() as any ; },
        "type": n => { event.type = n.getEnumValue<EventType>(EventType) as any ; },
        "uid": n => { event.uid = n.getStringValue() as any ; },
        "webLink": n => { event.webLink = n.getStringValue() as any ; },
    }
}
