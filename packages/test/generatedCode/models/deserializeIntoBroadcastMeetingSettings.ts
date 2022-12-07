import {BroadcastMeetingAudience} from './broadcastMeetingAudience';
import {deserializeIntoBroadcastMeetingCaptionSettings} from './deserializeIntoBroadcastMeetingCaptionSettings';
import {BroadcastMeetingSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBroadcastMeetingSettings(broadcastMeetingSettings: BroadcastMeetingSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedAudience": n => { broadcastMeetingSettings.allowedAudience = n.getEnumValue<BroadcastMeetingAudience>(BroadcastMeetingAudience) as any ; },
        "captions": n => { broadcastMeetingSettings.captions = n.getObject(deserializeIntoBroadcastMeetingCaptionSettings) as any ; },
        "isAttendeeReportEnabled": n => { broadcastMeetingSettings.isAttendeeReportEnabled = n.getBooleanValue() as any ; },
        "isQuestionAndAnswerEnabled": n => { broadcastMeetingSettings.isQuestionAndAnswerEnabled = n.getBooleanValue() as any ; },
        "isRecordingEnabled": n => { broadcastMeetingSettings.isRecordingEnabled = n.getBooleanValue() as any ; },
        "isVideoOnDemandEnabled": n => { broadcastMeetingSettings.isVideoOnDemandEnabled = n.getBooleanValue() as any ; },
    }
}
