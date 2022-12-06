import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSite} from '../../models/deserializeIntoSite';
import {RemoveResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveResponse(removeResponse: RemoveResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(removeResponse),
        "value": n => { removeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSite) as any ; },
    }
}
