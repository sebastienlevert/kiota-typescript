import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDomain} from './deserializeIntoDomain';
import {DomainCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainCollectionResponse(domainCollectionResponse: DomainCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainCollectionResponse),
        "value": n => { domainCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomain) as any ; },
    }
}
