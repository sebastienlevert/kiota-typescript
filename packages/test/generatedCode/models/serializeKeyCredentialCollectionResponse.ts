import {KeyCredentialCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeKeyCredential} from './serializeKeyCredential';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyCredentialCollectionResponse(writer: SerializationWriter, keyCredentialCollectionResponse: KeyCredentialCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, keyCredentialCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", keyCredentialCollectionResponse.value as any, serializeKeyCredential);
}
