import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface JoinMeetingIdSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether a passcode is required to join a meeting when using joinMeetingId. Optional. */
    isPasscodeRequired?: boolean;
    /** The meeting ID to be used to join a meeting. Optional. Read-only. */
    joinMeetingId?: string;
    /** The passcode to join a meeting.  Optional. Read-only. */
    passcode?: string;
}
