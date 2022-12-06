import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {IdentitySourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySourceCollectionResponse(identitySourceCollectionResponse: IdentitySourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identitySourceCollectionResponse),
        "value": n => { identitySourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentitySource) as any ; },
    }
}
