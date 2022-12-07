import {MeetingSpeaker} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingSpeaker(writer: SerializationWriter, meetingSpeaker: MeetingSpeaker | undefined = {}) : void {
            writer.writeStringValue("bio", meetingSpeaker.bio);
            writer.writeStringValue("displayName", meetingSpeaker.displayName);
}
