import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSession} from './deserializeIntoSession';
import {SessionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSessionCollectionResponse(sessionCollectionResponse: SessionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sessionCollectionResponse),
        "value": n => { sessionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSession) as any ; },
    }
}
