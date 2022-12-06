import {OrganizerMeetingInfo} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeMeetingInfo} from './serializeMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizerMeetingInfo(writer: SerializationWriter, organizerMeetingInfo: OrganizerMeetingInfo | undefined = {}) : void {
        serializeMeetingInfo(writer, organizerMeetingInfo)
            writer.writeObjectValueFromMethod("organizer", organizerMeetingInfo.organizer as any, serializeIdentitySet);
}
