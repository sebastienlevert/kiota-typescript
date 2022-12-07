import {CalendarColor} from './calendarColor';
import {Calendar} from './index';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {serializeCalendarPermission} from './serializeCalendarPermission';
import {serializeEmailAddress} from './serializeEmailAddress';
import {serializeEntity} from './serializeEntity';
import {serializeEvent} from './serializeEvent';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendar(writer: SerializationWriter, calendar: Calendar | undefined = {}) : void {
        serializeEntity(writer, calendar)
            //writer.writeEnumValue<OnlineMeetingProviderType>("allowedOnlineMeetingProviders", calendar.allowedOnlineMeetingProviders);
            writer.writeStringValue("calendarGroupId", calendar.calendarGroupId);
            writer.writeCollectionOfObjectValuesFromMethod("calendarPermissions", calendar.calendarPermissions as any, serializeCalendarPermission);
            writer.writeCollectionOfObjectValuesFromMethod("calendarView", calendar.calendarView as any, serializeEvent);
            writer.writeBooleanValue("canEdit", calendar.canEdit);
            writer.writeBooleanValue("canShare", calendar.canShare);
            writer.writeBooleanValue("canViewPrivateItems", calendar.canViewPrivateItems);
            writer.writeStringValue("changeKey", calendar.changeKey);
            writer.writeEnumValue<CalendarColor>("color", calendar.color);
            writer.writeEnumValue<OnlineMeetingProviderType>("defaultOnlineMeetingProvider", calendar.defaultOnlineMeetingProvider);
            writer.writeCollectionOfObjectValuesFromMethod("events", calendar.events as any, serializeEvent);
            writer.writeStringValue("hexColor", calendar.hexColor);
            writer.writeBooleanValue("isDefaultCalendar", calendar.isDefaultCalendar);
            writer.writeBooleanValue("isRemovable", calendar.isRemovable);
            writer.writeBooleanValue("isShared", calendar.isShared);
            writer.writeBooleanValue("isSharedWithMe", calendar.isSharedWithMe);
            writer.writeBooleanValue("isTallyingResponses", calendar.isTallyingResponses);
            writer.writeCollectionOfObjectValuesFromMethod("multiValueExtendedProperties", calendar.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("name", calendar.name);
            writer.writeObjectValueFromMethod("owner", calendar.owner as any, serializeEmailAddress);
            writer.writeCollectionOfObjectValuesFromMethod("singleValueExtendedProperties", calendar.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
}
