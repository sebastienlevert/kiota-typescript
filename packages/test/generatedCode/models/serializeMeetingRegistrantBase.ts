import {MeetingRegistrantBase} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingRegistrantBase(writer: SerializationWriter, meetingRegistrantBase: MeetingRegistrantBase | undefined = {}) : void {
        serializeEntity(writer, meetingRegistrantBase)
            writer.writeStringValue("joinWebUrl", meetingRegistrantBase.joinWebUrl);
}
