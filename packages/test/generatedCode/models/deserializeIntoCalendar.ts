import {CalendarColor} from './calendarColor';
import {deserializeIntoCalendarPermission} from './deserializeIntoCalendarPermission';
import {deserializeIntoEmailAddress} from './deserializeIntoEmailAddress';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoEvent} from './deserializeIntoEvent';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {Calendar} from './index';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendar(calendar: Calendar | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(calendar),
        "allowedOnlineMeetingProviders": n => { calendar.allowedOnlineMeetingProviders = n.getEnumValues<OnlineMeetingProviderType>(OnlineMeetingProviderType) as any ; },
        "calendarGroupId": n => { calendar.calendarGroupId = n.getStringValue() as any ; },
        "calendarPermissions": n => { calendar.calendarPermissions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendarPermission) as any ; },
        "calendarView": n => { calendar.calendarView = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
        "canEdit": n => { calendar.canEdit = n.getBooleanValue() as any ; },
        "canShare": n => { calendar.canShare = n.getBooleanValue() as any ; },
        "canViewPrivateItems": n => { calendar.canViewPrivateItems = n.getBooleanValue() as any ; },
        "changeKey": n => { calendar.changeKey = n.getStringValue() as any ; },
        "color": n => { calendar.color = n.getEnumValue<CalendarColor>(CalendarColor) as any ; },
        "defaultOnlineMeetingProvider": n => { calendar.defaultOnlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType) as any ; },
        "events": n => { calendar.events = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEvent) as any ; },
        "hexColor": n => { calendar.hexColor = n.getStringValue() as any ; },
        "isDefaultCalendar": n => { calendar.isDefaultCalendar = n.getBooleanValue() as any ; },
        "isRemovable": n => { calendar.isRemovable = n.getBooleanValue() as any ; },
        "isShared": n => { calendar.isShared = n.getBooleanValue() as any ; },
        "isSharedWithMe": n => { calendar.isSharedWithMe = n.getBooleanValue() as any ; },
        "isTallyingResponses": n => { calendar.isTallyingResponses = n.getBooleanValue() as any ; },
        "multiValueExtendedProperties": n => { calendar.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "name": n => { calendar.name = n.getStringValue() as any ; },
        "owner": n => { calendar.owner = n.getObject(deserializeIntoEmailAddress) as any ; },
        "singleValueExtendedProperties": n => { calendar.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
    }
}
