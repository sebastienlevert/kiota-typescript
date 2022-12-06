import {AuthenticationMethodCollectionResponse} from './index';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodCollectionResponse(writer: SerializationWriter, authenticationMethodCollectionResponse: AuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", authenticationMethodCollectionResponse.value as any, serializeAuthenticationMethod);
}
