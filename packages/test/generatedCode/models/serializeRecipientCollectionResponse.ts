import {RecipientCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRecipient} from './serializeRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecipientCollectionResponse(writer: SerializationWriter, recipientCollectionResponse: RecipientCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, recipientCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", recipientCollectionResponse.value as any, serializeRecipient);
}
