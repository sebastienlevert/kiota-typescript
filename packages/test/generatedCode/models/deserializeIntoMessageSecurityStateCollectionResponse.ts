import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMessageSecurityState} from './deserializeIntoMessageSecurityState';
import {MessageSecurityStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageSecurityStateCollectionResponse(messageSecurityStateCollectionResponse: MessageSecurityStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(messageSecurityStateCollectionResponse),
        "value": n => { messageSecurityStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessageSecurityState) as any ; },
    }
}
