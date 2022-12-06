import {CopyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyPostRequestBody(writer: SerializationWriter, copyPostRequestBody: CopyPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("destinationId", copyPostRequestBody.destinationId);
}
