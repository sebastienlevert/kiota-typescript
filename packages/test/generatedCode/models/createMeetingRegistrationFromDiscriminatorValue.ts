import {MeetingRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingRegistration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingRegistration();
}
