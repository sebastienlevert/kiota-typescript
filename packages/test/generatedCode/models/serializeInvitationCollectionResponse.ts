import {InvitationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInvitation} from './serializeInvitation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitationCollectionResponse(writer: SerializationWriter, invitationCollectionResponse: InvitationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, invitationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", invitationCollectionResponse.value as any, serializeInvitation);
}
