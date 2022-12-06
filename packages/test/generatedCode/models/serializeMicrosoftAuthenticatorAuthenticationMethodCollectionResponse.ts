import {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMicrosoftAuthenticatorAuthenticationMethod} from './serializeMicrosoftAuthenticatorAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodCollectionResponse(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethodCollectionResponse: MicrosoftAuthenticatorAuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, microsoftAuthenticatorAuthenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", microsoftAuthenticatorAuthenticationMethodCollectionResponse.value as any, serializeMicrosoftAuthenticatorAuthenticationMethod);
}
