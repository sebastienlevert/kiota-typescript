import {MeetingSpeaker} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingSpeaker(meetingSpeaker: MeetingSpeaker | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bio": n => { meetingSpeaker.bio = n.getStringValue() as any ; },
        "displayName": n => { meetingSpeaker.displayName = n.getStringValue() as any ; },
    }
}
