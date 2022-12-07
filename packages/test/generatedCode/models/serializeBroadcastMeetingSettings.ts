import {BroadcastMeetingAudience} from './broadcastMeetingAudience';
import {BroadcastMeetingSettings} from './index';
import {serializeBroadcastMeetingCaptionSettings} from './serializeBroadcastMeetingCaptionSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBroadcastMeetingSettings(writer: SerializationWriter, broadcastMeetingSettings: BroadcastMeetingSettings | undefined = {}) : void {
            writer.writeEnumValue<BroadcastMeetingAudience>("allowedAudience", broadcastMeetingSettings.allowedAudience);
            writer.writeObjectValueFromMethod("captions", broadcastMeetingSettings.captions as any, serializeBroadcastMeetingCaptionSettings);
            writer.writeBooleanValue("isAttendeeReportEnabled", broadcastMeetingSettings.isAttendeeReportEnabled);
            writer.writeBooleanValue("isQuestionAndAnswerEnabled", broadcastMeetingSettings.isQuestionAndAnswerEnabled);
            writer.writeBooleanValue("isRecordingEnabled", broadcastMeetingSettings.isRecordingEnabled);
            writer.writeBooleanValue("isVideoOnDemandEnabled", broadcastMeetingSettings.isVideoOnDemandEnabled);
}
