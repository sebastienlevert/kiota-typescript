import {ChatInfo, MeetingParticipants} from '../../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreateOrGetPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The chatInfo property */
    chatInfo?: ChatInfo;
    /** The endDateTime property */
    endDateTime?: Date;
    /** The externalId property */
    externalId?: string;
    /** The participants property */
    participants?: MeetingParticipants;
    /** The startDateTime property */
    startDateTime?: Date;
    /** The subject property */
    subject?: string;
}
