import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryCustodian} from './deserializeIntoEdiscoveryCustodian';
import {EdiscoveryCustodianCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCustodianCollectionResponse(ediscoveryCustodianCollectionResponse: EdiscoveryCustodianCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryCustodianCollectionResponse),
        "value": n => { ediscoveryCustodianCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryCustodian) as any ; },
    }
}
