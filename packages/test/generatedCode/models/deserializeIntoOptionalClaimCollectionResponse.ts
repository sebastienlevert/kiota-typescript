import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOptionalClaim} from './deserializeIntoOptionalClaim';
import {OptionalClaimCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOptionalClaimCollectionResponse(optionalClaimCollectionResponse: OptionalClaimCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(optionalClaimCollectionResponse),
        "value": n => { optionalClaimCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOptionalClaim) as any ; },
    }
}
