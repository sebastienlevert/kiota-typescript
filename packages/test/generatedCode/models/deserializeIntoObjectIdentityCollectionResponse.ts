import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoObjectIdentity} from './deserializeIntoObjectIdentity';
import {ObjectIdentityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectIdentityCollectionResponse(objectIdentityCollectionResponse: ObjectIdentityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(objectIdentityCollectionResponse),
        "value": n => { objectIdentityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoObjectIdentity) as any ; },
    }
}
