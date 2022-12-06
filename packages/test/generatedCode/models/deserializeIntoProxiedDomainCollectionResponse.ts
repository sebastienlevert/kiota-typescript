import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoProxiedDomain} from './deserializeIntoProxiedDomain';
import {ProxiedDomainCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProxiedDomainCollectionResponse(proxiedDomainCollectionResponse: ProxiedDomainCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(proxiedDomainCollectionResponse),
        "value": n => { proxiedDomainCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProxiedDomain) as any ; },
    }
}
