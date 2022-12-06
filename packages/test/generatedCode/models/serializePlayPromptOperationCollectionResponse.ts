import {PlayPromptOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePlayPromptOperation} from './serializePlayPromptOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlayPromptOperationCollectionResponse(writer: SerializationWriter, playPromptOperationCollectionResponse: PlayPromptOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, playPromptOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", playPromptOperationCollectionResponse.value as any, serializePlayPromptOperation);
}
