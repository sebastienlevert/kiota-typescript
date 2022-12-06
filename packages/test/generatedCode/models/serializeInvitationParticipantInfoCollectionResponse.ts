import {InvitationParticipantInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInvitationParticipantInfo} from './serializeInvitationParticipantInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitationParticipantInfoCollectionResponse(writer: SerializationWriter, invitationParticipantInfoCollectionResponse: InvitationParticipantInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, invitationParticipantInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", invitationParticipantInfoCollectionResponse.value as any, serializeInvitationParticipantInfo);
}
