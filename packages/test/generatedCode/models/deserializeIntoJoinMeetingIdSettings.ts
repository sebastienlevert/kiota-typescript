import {JoinMeetingIdSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoJoinMeetingIdSettings(joinMeetingIdSettings: JoinMeetingIdSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isPasscodeRequired": n => { joinMeetingIdSettings.isPasscodeRequired = n.getBooleanValue() as any ; },
        "joinMeetingId": n => { joinMeetingIdSettings.joinMeetingId = n.getStringValue() as any ; },
        "passcode": n => { joinMeetingIdSettings.passcode = n.getStringValue() as any ; },
    }
}
