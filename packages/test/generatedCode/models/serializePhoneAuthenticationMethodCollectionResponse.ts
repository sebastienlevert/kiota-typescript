import {PhoneAuthenticationMethodCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePhoneAuthenticationMethod} from './serializePhoneAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhoneAuthenticationMethodCollectionResponse(writer: SerializationWriter, phoneAuthenticationMethodCollectionResponse: PhoneAuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, phoneAuthenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", phoneAuthenticationMethodCollectionResponse.value as any, serializePhoneAuthenticationMethod);
}
