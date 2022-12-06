import {MicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMicrosoftAuthenticatorAuthenticationMethodTarget} from './serializeMicrosoftAuthenticatorAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethodTargetCollectionResponse: MicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, microsoftAuthenticatorAuthenticationMethodTargetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", microsoftAuthenticatorAuthenticationMethodTargetCollectionResponse.value as any, serializeMicrosoftAuthenticatorAuthenticationMethodTarget);
}
