import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPasswordAuthenticationMethod} from './deserializeIntoPasswordAuthenticationMethod';
import {PasswordAuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordAuthenticationMethodCollectionResponse(passwordAuthenticationMethodCollectionResponse: PasswordAuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(passwordAuthenticationMethodCollectionResponse),
        "value": n => { passwordAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPasswordAuthenticationMethod) as any ; },
    }
}
