import {CalendarSharingAction} from './calendarSharingAction';
import {CalendarSharingActionImportance} from './calendarSharingActionImportance';
import {CalendarSharingActionType} from './calendarSharingActionType';
import {CalendarSharingMessageAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarSharingMessageAction(calendarSharingMessageAction: CalendarSharingMessageAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "action": n => { calendarSharingMessageAction.action = n.getEnumValue<CalendarSharingAction>(CalendarSharingAction) as any ; },
        "actionType": n => { calendarSharingMessageAction.actionType = n.getEnumValue<CalendarSharingActionType>(CalendarSharingActionType) as any ; },
        "importance": n => { calendarSharingMessageAction.importance = n.getEnumValue<CalendarSharingActionImportance>(CalendarSharingActionImportance) as any ; },
        "@odata.type": n => { calendarSharingMessageAction.odataType = n.getStringValue() as any ; },
    }
}
