import {SubscribeToTonePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscribeToTonePostRequestBody(writer: SerializationWriter, subscribeToTonePostRequestBody: SubscribeToTonePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", subscribeToTonePostRequestBody.clientContext);
}
