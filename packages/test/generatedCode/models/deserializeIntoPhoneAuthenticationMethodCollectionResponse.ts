import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPhoneAuthenticationMethod} from './deserializeIntoPhoneAuthenticationMethod';
import {PhoneAuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhoneAuthenticationMethodCollectionResponse(phoneAuthenticationMethodCollectionResponse: PhoneAuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(phoneAuthenticationMethodCollectionResponse),
        "value": n => { phoneAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhoneAuthenticationMethod) as any ; },
    }
}
