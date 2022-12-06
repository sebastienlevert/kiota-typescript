import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPasswordCredential} from './deserializeIntoPasswordCredential';
import {PasswordCredentialCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordCredentialCollectionResponse(passwordCredentialCollectionResponse: PasswordCredentialCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(passwordCredentialCollectionResponse),
        "value": n => { passwordCredentialCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPasswordCredential) as any ; },
    }
}
