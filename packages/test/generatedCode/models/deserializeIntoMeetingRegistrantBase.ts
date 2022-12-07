import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MeetingRegistrantBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingRegistrantBase(meetingRegistrantBase: MeetingRegistrantBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(meetingRegistrantBase),
        "joinWebUrl": n => { meetingRegistrantBase.joinWebUrl = n.getStringValue() as any ; },
    }
}
