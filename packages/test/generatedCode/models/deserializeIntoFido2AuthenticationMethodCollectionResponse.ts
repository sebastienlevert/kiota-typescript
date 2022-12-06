import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoFido2AuthenticationMethod} from './deserializeIntoFido2AuthenticationMethod';
import {Fido2AuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2AuthenticationMethodCollectionResponse(fido2AuthenticationMethodCollectionResponse: Fido2AuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(fido2AuthenticationMethodCollectionResponse),
        "value": n => { fido2AuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFido2AuthenticationMethod) as any ; },
    }
}
