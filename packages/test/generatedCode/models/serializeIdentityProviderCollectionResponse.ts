import {IdentityProviderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityProvider} from './serializeIdentityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderCollectionResponse(writer: SerializationWriter, identityProviderCollectionResponse: IdentityProviderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityProviderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identityProviderCollectionResponse.value as any, serializeIdentityProvider);
}
