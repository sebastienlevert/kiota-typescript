import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCall} from './deserializeIntoCall';
import {CallCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallCollectionResponse(callCollectionResponse: CallCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(callCollectionResponse),
        "value": n => { callCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCall) as any ; },
    }
}
