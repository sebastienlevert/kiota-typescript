import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoKeyCredential} from './deserializeIntoKeyCredential';
import {KeyCredentialCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyCredentialCollectionResponse(keyCredentialCollectionResponse: KeyCredentialCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(keyCredentialCollectionResponse),
        "value": n => { keyCredentialCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyCredential) as any ; },
    }
}
