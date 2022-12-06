import {CancelPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCancelPostRequestBody(writer: SerializationWriter, cancelPostRequestBody: CancelPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("cancellationMessage", cancelPostRequestBody.cancellationMessage);
}
