import {MeetingRegistrantBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingRegistrantBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingRegistrantBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingRegistrantBase();
}
