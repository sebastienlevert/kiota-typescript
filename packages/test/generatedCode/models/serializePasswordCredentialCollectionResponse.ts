import {PasswordCredentialCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePasswordCredential} from './serializePasswordCredential';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordCredentialCollectionResponse(writer: SerializationWriter, passwordCredentialCollectionResponse: PasswordCredentialCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, passwordCredentialCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", passwordCredentialCollectionResponse.value as any, serializePasswordCredential);
}
