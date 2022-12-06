import {AuthenticationMethodConfigurationCollectionResponse} from './index';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodConfigurationCollectionResponse(writer: SerializationWriter, authenticationMethodConfigurationCollectionResponse: AuthenticationMethodConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", authenticationMethodConfigurationCollectionResponse.value as any, serializeAuthenticationMethodConfiguration);
}
