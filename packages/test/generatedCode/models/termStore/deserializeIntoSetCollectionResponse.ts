import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSet} from './deserializeIntoSet';
import {SetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetCollectionResponse(setCollectionResponse: SetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(setCollectionResponse),
        "value": n => { setCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSet) as any ; },
    }
}
