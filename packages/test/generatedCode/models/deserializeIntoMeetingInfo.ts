import {MeetingInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingInfo(meetingInfo: MeetingInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { meetingInfo.odataType = n.getStringValue() as any ; },
    }
}
