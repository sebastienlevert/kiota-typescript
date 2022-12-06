import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPresence} from './deserializeIntoPresence';
import {PresenceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPresenceCollectionResponse(presenceCollectionResponse: PresenceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(presenceCollectionResponse),
        "value": n => { presenceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPresence) as any ; },
    }
}
