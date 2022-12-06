import {Fido2AuthenticationMethodCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFido2AuthenticationMethod} from './serializeFido2AuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFido2AuthenticationMethodCollectionResponse(writer: SerializationWriter, fido2AuthenticationMethodCollectionResponse: Fido2AuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, fido2AuthenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", fido2AuthenticationMethodCollectionResponse.value as any, serializeFido2AuthenticationMethod);
}
