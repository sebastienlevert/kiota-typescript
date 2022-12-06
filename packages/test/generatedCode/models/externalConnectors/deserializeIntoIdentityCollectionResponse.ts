import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {IdentityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityCollectionResponse(identityCollectionResponse: IdentityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityCollectionResponse),
        "value": n => { identityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentity) as any ; },
    }
}
