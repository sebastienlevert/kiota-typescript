import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoAcl} from './deserializeIntoAcl';
import {AclCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAclCollectionResponse(aclCollectionResponse: AclCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(aclCollectionResponse),
        "value": n => { aclCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAcl) as any ; },
    }
}
