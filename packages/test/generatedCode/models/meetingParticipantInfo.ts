import {IdentitySet} from './index';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingParticipantInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Identity information of the participant. */
    identity?: IdentitySet;
    /** The OdataType property */
    odataType?: string;
    /** Specifies the participant's role in the meeting.  Possible values are attendee, presenter, producer, and unknownFutureValue. */
    role?: OnlineMeetingRole;
    /** User principal name of the participant. */
    upn?: string;
}
