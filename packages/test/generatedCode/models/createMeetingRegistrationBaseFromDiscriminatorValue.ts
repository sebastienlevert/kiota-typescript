import {MeetingRegistrationBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingRegistrationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingRegistrationBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingRegistrationBase();
}
