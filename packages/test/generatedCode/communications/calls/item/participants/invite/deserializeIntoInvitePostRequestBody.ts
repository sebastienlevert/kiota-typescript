import {deserializeIntoInvitationParticipantInfo} from '../../../../../models/deserializeIntoInvitationParticipantInfo';
import {InvitePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitePostRequestBody(invitePostRequestBody: InvitePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { invitePostRequestBody.clientContext = n.getStringValue() as any ; },
        "participants": n => { invitePostRequestBody.participants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInvitationParticipantInfo) as any ; },
    }
}
