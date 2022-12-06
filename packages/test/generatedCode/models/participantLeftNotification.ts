import {Call, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantLeftNotification extends Entity, Partial<Parsable> {
    /** The call property */
    call?: Call;
    /** ID of the participant under the policy who has left the meeting. */
    participantId?: string;
}
