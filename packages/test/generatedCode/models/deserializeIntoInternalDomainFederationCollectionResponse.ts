import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoInternalDomainFederation} from './deserializeIntoInternalDomainFederation';
import {InternalDomainFederationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternalDomainFederationCollectionResponse(internalDomainFederationCollectionResponse: InternalDomainFederationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(internalDomainFederationCollectionResponse),
        "value": n => { internalDomainFederationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInternalDomainFederation) as any ; },
    }
}
