import {StopHoldMusicPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStopHoldMusicPostRequestBody(writer: SerializationWriter, stopHoldMusicPostRequestBody: StopHoldMusicPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", stopHoldMusicPostRequestBody.clientContext);
}
