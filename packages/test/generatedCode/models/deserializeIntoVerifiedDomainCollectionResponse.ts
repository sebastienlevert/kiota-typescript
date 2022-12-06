import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoVerifiedDomain} from './deserializeIntoVerifiedDomain';
import {VerifiedDomainCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVerifiedDomainCollectionResponse(verifiedDomainCollectionResponse: VerifiedDomainCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(verifiedDomainCollectionResponse),
        "value": n => { verifiedDomainCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoVerifiedDomain) as any ; },
    }
}
