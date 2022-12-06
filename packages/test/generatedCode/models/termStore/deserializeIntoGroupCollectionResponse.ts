import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoGroup} from './deserializeIntoGroup';
import {GroupCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupCollectionResponse(groupCollectionResponse: GroupCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupCollectionResponse),
        "value": n => { groupCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoGroup) as any ; },
    }
}
