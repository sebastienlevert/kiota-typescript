import {MarkReadPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkReadPostRequestBody(writer: SerializationWriter, markReadPostRequestBody: MarkReadPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("messageIds", markReadPostRequestBody.messageIds);
}
