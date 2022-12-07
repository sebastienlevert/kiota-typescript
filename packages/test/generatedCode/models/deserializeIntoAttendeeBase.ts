import {AttendeeType} from './attendeeType';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {AttendeeBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendeeBase(attendeeBase: AttendeeBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRecipient(attendeeBase),
        "type": n => { attendeeBase.type = n.getEnumValue<AttendeeType>(AttendeeType) as any ; },
    }
}
