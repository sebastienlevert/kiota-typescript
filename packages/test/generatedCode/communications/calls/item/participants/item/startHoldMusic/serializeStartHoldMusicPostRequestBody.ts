import {serializePrompt} from '../../../../../../models/serializePrompt';
import {StartHoldMusicPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStartHoldMusicPostRequestBody(writer: SerializationWriter, startHoldMusicPostRequestBody: StartHoldMusicPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", startHoldMusicPostRequestBody.clientContext);
            writer.writeObjectValueFromMethod("customPrompt", startHoldMusicPostRequestBody.customPrompt as any, serializePrompt);
}
