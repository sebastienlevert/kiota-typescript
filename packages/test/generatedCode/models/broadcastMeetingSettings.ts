import {BroadcastMeetingAudience} from './broadcastMeetingAudience';
import {BroadcastMeetingCaptionSettings} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BroadcastMeetingSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The allowedAudience property */
    allowedAudience?: BroadcastMeetingAudience;
    /** The captions property */
    captions?: BroadcastMeetingCaptionSettings;
    /** Indicates whether attendee report is enabled for this Teams live event. Default value is false. */
    isAttendeeReportEnabled?: boolean;
    /** Indicates whether Q&A is enabled for this Teams live event. Default value is false. */
    isQuestionAndAnswerEnabled?: boolean;
    /** Indicates whether recording is enabled for this Teams live event. Default value is false. */
    isRecordingEnabled?: boolean;
    /** Indicates whether video on demand is enabled for this Teams live event. Default value is false. */
    isVideoOnDemandEnabled?: boolean;
}
