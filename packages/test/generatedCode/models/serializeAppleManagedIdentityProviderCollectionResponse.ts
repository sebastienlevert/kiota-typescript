import {AppleManagedIdentityProviderCollectionResponse} from './index';
import {serializeAppleManagedIdentityProvider} from './serializeAppleManagedIdentityProvider';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppleManagedIdentityProviderCollectionResponse(writer: SerializationWriter, appleManagedIdentityProviderCollectionResponse: AppleManagedIdentityProviderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appleManagedIdentityProviderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appleManagedIdentityProviderCollectionResponse.value as any, serializeAppleManagedIdentityProvider);
}
