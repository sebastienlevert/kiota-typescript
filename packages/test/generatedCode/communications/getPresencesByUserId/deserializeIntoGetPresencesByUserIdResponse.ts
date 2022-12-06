import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPresence} from '../../models/deserializeIntoPresence';
import {GetPresencesByUserIdResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPresencesByUserIdResponse(getPresencesByUserIdResponse: GetPresencesByUserIdResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPresencesByUserIdResponse),
        "value": n => { getPresencesByUserIdResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPresence) as any ; },
    }
}
