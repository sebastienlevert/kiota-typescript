import {JoinMeetingIdSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeJoinMeetingIdSettings(writer: SerializationWriter, joinMeetingIdSettings: JoinMeetingIdSettings | undefined = {}) : void {
            writer.writeBooleanValue("isPasscodeRequired", joinMeetingIdSettings.isPasscodeRequired);
            writer.writeStringValue("joinMeetingId", joinMeetingIdSettings.joinMeetingId);
            writer.writeStringValue("passcode", joinMeetingIdSettings.passcode);
}
