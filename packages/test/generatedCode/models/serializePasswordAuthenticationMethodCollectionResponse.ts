import {PasswordAuthenticationMethodCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePasswordAuthenticationMethod} from './serializePasswordAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordAuthenticationMethodCollectionResponse(writer: SerializationWriter, passwordAuthenticationMethodCollectionResponse: PasswordAuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, passwordAuthenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", passwordAuthenticationMethodCollectionResponse.value as any, serializePasswordAuthenticationMethod);
}
