import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoInvitation} from './deserializeIntoInvitation';
import {InvitationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvitationCollectionResponse(invitationCollectionResponse: InvitationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(invitationCollectionResponse),
        "value": n => { invitationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInvitation) as any ; },
    }
}
