import {MeetingSpeaker} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingSpeakerFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingSpeaker {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingSpeaker();
}
