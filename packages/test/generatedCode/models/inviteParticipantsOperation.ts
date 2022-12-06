import {CommsOperation, InvitationParticipantInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InviteParticipantsOperation extends CommsOperation, Partial<Parsable> {
    /** The participants to invite. */
    participants?: InvitationParticipantInfo[];
}
