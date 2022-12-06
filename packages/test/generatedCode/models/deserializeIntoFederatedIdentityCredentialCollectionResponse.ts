import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoFederatedIdentityCredential} from './deserializeIntoFederatedIdentityCredential';
import {FederatedIdentityCredentialCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFederatedIdentityCredentialCollectionResponse(federatedIdentityCredentialCollectionResponse: FederatedIdentityCredentialCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(federatedIdentityCredentialCollectionResponse),
        "value": n => { federatedIdentityCredentialCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFederatedIdentityCredential) as any ; },
    }
}
