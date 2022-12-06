import {InviteParticipantsOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {serializeInvitationParticipantInfo} from './serializeInvitationParticipantInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInviteParticipantsOperation(writer: SerializationWriter, inviteParticipantsOperation: InviteParticipantsOperation | undefined = {}) : void {
        serializeCommsOperation(writer, inviteParticipantsOperation)
            writer.writeCollectionOfObjectValuesFromMethod("participants", inviteParticipantsOperation.participants as any, serializeInvitationParticipantInfo);
}
