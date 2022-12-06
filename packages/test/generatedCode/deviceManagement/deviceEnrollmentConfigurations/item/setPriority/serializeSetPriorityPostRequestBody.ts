import {SetPriorityPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetPriorityPostRequestBody(writer: SerializationWriter, setPriorityPostRequestBody: SetPriorityPostRequestBody | undefined = {}) : void {
            writer.writeNumberValue("priority", setPriorityPostRequestBody.priority);
}
