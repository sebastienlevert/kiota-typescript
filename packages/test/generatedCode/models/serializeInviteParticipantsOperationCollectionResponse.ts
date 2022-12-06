import {InviteParticipantsOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInviteParticipantsOperation} from './serializeInviteParticipantsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInviteParticipantsOperationCollectionResponse(writer: SerializationWriter, inviteParticipantsOperationCollectionResponse: InviteParticipantsOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, inviteParticipantsOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", inviteParticipantsOperationCollectionResponse.value as any, serializeInviteParticipantsOperation);
}
