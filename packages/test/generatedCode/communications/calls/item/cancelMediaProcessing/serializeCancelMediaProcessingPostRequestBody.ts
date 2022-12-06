import {CancelMediaProcessingPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCancelMediaProcessingPostRequestBody(writer: SerializationWriter, cancelMediaProcessingPostRequestBody: CancelMediaProcessingPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", cancelMediaProcessingPostRequestBody.clientContext);
}
