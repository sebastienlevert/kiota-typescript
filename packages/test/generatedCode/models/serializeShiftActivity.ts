import {ShiftActivity} from './index';
import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftActivity(writer: SerializationWriter, shiftActivity: ShiftActivity | undefined = {}) : void {
            writer.writeStringValue("code", shiftActivity.code);
            writer.writeStringValue("displayName", shiftActivity.displayName);
            writer.writeDateValue("endDateTime", shiftActivity.endDateTime);
            writer.writeBooleanValue("isPaid", shiftActivity.isPaid);
            writer.writeStringValue("@odata.type", shiftActivity.odataType);
            writer.writeDateValue("startDateTime", shiftActivity.startDateTime);
            writer.writeEnumValue<ScheduleEntityTheme>("theme", shiftActivity.theme);
}
