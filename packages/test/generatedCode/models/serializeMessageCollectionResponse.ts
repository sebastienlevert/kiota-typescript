import {MessageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMessage} from './serializeMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageCollectionResponse(writer: SerializationWriter, messageCollectionResponse: MessageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, messageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", messageCollectionResponse.value as any, serializeMessage);
}
