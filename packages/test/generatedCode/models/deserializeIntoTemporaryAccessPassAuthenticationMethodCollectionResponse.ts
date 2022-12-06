import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTemporaryAccessPassAuthenticationMethod} from './deserializeIntoTemporaryAccessPassAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse(temporaryAccessPassAuthenticationMethodCollectionResponse: TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(temporaryAccessPassAuthenticationMethodCollectionResponse),
        "value": n => { temporaryAccessPassAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTemporaryAccessPassAuthenticationMethod) as any ; },
    }
}
