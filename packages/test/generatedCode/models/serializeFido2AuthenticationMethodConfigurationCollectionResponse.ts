import {Fido2AuthenticationMethodConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFido2AuthenticationMethodConfiguration} from './serializeFido2AuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFido2AuthenticationMethodConfigurationCollectionResponse(writer: SerializationWriter, fido2AuthenticationMethodConfigurationCollectionResponse: Fido2AuthenticationMethodConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, fido2AuthenticationMethodConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", fido2AuthenticationMethodConfigurationCollectionResponse.value as any, serializeFido2AuthenticationMethodConfiguration);
}
