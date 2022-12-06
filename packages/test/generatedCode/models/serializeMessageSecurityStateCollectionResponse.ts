import {MessageSecurityStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMessageSecurityState} from './serializeMessageSecurityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageSecurityStateCollectionResponse(writer: SerializationWriter, messageSecurityStateCollectionResponse: MessageSecurityStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, messageSecurityStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", messageSecurityStateCollectionResponse.value as any, serializeMessageSecurityState);
}
