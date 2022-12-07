import {MeetingRegistrationBase} from './index';
import {MeetingAudience} from './meetingAudience';
import {serializeEntity} from './serializeEntity';
import {serializeMeetingRegistrantBase} from './serializeMeetingRegistrantBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingRegistrationBase(writer: SerializationWriter, meetingRegistrationBase: MeetingRegistrationBase | undefined = {}) : void {
        serializeEntity(writer, meetingRegistrationBase)
            writer.writeEnumValue<MeetingAudience>("allowedRegistrant", meetingRegistrationBase.allowedRegistrant);
            writer.writeCollectionOfObjectValuesFromMethod("registrants", meetingRegistrationBase.registrants as any, serializeMeetingRegistrantBase);
}
