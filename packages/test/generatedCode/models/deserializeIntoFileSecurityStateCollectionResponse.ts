import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoFileSecurityState} from './deserializeIntoFileSecurityState';
import {FileSecurityStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileSecurityStateCollectionResponse(fileSecurityStateCollectionResponse: FileSecurityStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(fileSecurityStateCollectionResponse),
        "value": n => { fileSecurityStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFileSecurityState) as any ; },
    }
}
