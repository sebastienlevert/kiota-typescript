import {BuiltInIdentityProviderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBuiltInIdentityProvider} from './serializeBuiltInIdentityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBuiltInIdentityProviderCollectionResponse(writer: SerializationWriter, builtInIdentityProviderCollectionResponse: BuiltInIdentityProviderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, builtInIdentityProviderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", builtInIdentityProviderCollectionResponse.value as any, serializeBuiltInIdentityProvider);
}
