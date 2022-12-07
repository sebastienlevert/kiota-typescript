import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMeetingRegistrantBase} from './deserializeIntoMeetingRegistrantBase';
import {MeetingRegistrationBase} from './index';
import {MeetingAudience} from './meetingAudience';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingRegistrationBase(meetingRegistrationBase: MeetingRegistrationBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(meetingRegistrationBase),
        "allowedRegistrant": n => { meetingRegistrationBase.allowedRegistrant = n.getEnumValue<MeetingAudience>(MeetingAudience) as any ; },
        "registrants": n => { meetingRegistrationBase.registrants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingRegistrantBase) as any ; },
    }
}
