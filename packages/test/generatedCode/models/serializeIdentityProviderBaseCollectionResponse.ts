import {IdentityProviderBaseCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderBaseCollectionResponse(writer: SerializationWriter, identityProviderBaseCollectionResponse: IdentityProviderBaseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityProviderBaseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identityProviderBaseCollectionResponse.value as any, serializeIdentityProviderBase);
}
