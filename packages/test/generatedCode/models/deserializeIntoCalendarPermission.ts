import {CalendarRoleType} from './calendarRoleType';
import {deserializeIntoEmailAddress} from './deserializeIntoEmailAddress';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {CalendarPermission} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarPermission(calendarPermission: CalendarPermission | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(calendarPermission),
        "allowedRoles": n => { calendarPermission.allowedRoles = n.getEnumValues<CalendarRoleType>(CalendarRoleType) as any ; },
        "emailAddress": n => { calendarPermission.emailAddress = n.getObject(deserializeIntoEmailAddress) as any ; },
        "isInsideOrganization": n => { calendarPermission.isInsideOrganization = n.getBooleanValue() as any ; },
        "isRemovable": n => { calendarPermission.isRemovable = n.getBooleanValue() as any ; },
        "role": n => { calendarPermission.role = n.getEnumValue<CalendarRoleType>(CalendarRoleType) as any ; },
    }
}
