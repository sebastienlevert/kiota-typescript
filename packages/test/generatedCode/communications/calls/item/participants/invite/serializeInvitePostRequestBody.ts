import {serializeInvitationParticipantInfo} from '../../../../../models/serializeInvitationParticipantInfo';
import {InvitePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitePostRequestBody(writer: SerializationWriter, invitePostRequestBody: InvitePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", invitePostRequestBody.clientContext);
            writer.writeCollectionOfObjectValuesFromMethod("participants", invitePostRequestBody.participants as any, serializeInvitationParticipantInfo);
}
