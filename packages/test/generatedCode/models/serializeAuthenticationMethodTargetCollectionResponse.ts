import {AuthenticationMethodTargetCollectionResponse} from './index';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodTargetCollectionResponse(writer: SerializationWriter, authenticationMethodTargetCollectionResponse: AuthenticationMethodTargetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodTargetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", authenticationMethodTargetCollectionResponse.value as any, serializeAuthenticationMethodTarget);
}
