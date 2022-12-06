import {MicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMicrosoftAuthenticatorAuthenticationMethodConfiguration} from './serializeMicrosoftAuthenticatorAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse: MicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, microsoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", microsoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse.value as any, serializeMicrosoftAuthenticatorAuthenticationMethodConfiguration);
}
