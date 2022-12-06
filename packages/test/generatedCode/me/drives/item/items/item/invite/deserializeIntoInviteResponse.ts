import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPermission} from '../../../../../../models/deserializeIntoPermission';
import {InviteResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInviteResponse(inviteResponse: InviteResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(inviteResponse),
        "value": n => { inviteResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermission) as any ; },
    }
}
