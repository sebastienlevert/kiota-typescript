import {MovePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMovePostRequestBody(writer: SerializationWriter, movePostRequestBody: MovePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("destinationId", movePostRequestBody.destinationId);
}
