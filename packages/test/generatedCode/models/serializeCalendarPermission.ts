import {CalendarRoleType} from './calendarRoleType';
import {CalendarPermission} from './index';
import {serializeEmailAddress} from './serializeEmailAddress';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarPermission(writer: SerializationWriter, calendarPermission: CalendarPermission | undefined = {}) : void {
        serializeEntity(writer, calendarPermission)
            //writer.writeEnumValue<CalendarRoleType>("allowedRoles", calendarPermission.allowedRoles);
            writer.writeObjectValueFromMethod("emailAddress", calendarPermission.emailAddress as any, serializeEmailAddress);
            writer.writeBooleanValue("isInsideOrganization", calendarPermission.isInsideOrganization);
            writer.writeBooleanValue("isRemovable", calendarPermission.isRemovable);
            writer.writeEnumValue<CalendarRoleType>("role", calendarPermission.role);
}
