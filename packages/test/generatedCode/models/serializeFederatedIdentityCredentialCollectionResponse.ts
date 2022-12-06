import {FederatedIdentityCredentialCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFederatedIdentityCredential} from './serializeFederatedIdentityCredential';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFederatedIdentityCredentialCollectionResponse(writer: SerializationWriter, federatedIdentityCredentialCollectionResponse: FederatedIdentityCredentialCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, federatedIdentityCredentialCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", federatedIdentityCredentialCollectionResponse.value as any, serializeFederatedIdentityCredential);
}
