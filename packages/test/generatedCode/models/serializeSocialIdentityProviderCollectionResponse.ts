import {SocialIdentityProviderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSocialIdentityProvider} from './serializeSocialIdentityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSocialIdentityProviderCollectionResponse(writer: SerializationWriter, socialIdentityProviderCollectionResponse: SocialIdentityProviderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, socialIdentityProviderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", socialIdentityProviderCollectionResponse.value as any, serializeSocialIdentityProvider);
}
