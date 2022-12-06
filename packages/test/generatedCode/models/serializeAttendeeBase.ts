import {AttendeeType} from './attendeeType';
import {AttendeeBase} from './index';
import {serializeRecipient} from './serializeRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendeeBase(writer: SerializationWriter, attendeeBase: AttendeeBase | undefined = {}) : void {
        serializeRecipient(writer, attendeeBase)
            writer.writeEnumValue<AttendeeType>("type", attendeeBase.type);
}
