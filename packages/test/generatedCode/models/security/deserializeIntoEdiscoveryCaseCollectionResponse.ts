import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryCase} from './deserializeIntoEdiscoveryCase';
import {EdiscoveryCaseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCaseCollectionResponse(ediscoveryCaseCollectionResponse: EdiscoveryCaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryCaseCollectionResponse),
        "value": n => { ediscoveryCaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryCase) as any ; },
    }
}
