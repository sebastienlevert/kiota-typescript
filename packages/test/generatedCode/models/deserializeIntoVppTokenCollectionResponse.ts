import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoVppToken} from './deserializeIntoVppToken';
import {VppTokenCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVppTokenCollectionResponse(vppTokenCollectionResponse: VppTokenCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(vppTokenCollectionResponse),
        "value": n => { vppTokenCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoVppToken) as any ; },
    }
}
