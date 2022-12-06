import {serializePrompt} from '../../../../models/serializePrompt';
import {PlayPromptPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlayPromptPostRequestBody(writer: SerializationWriter, playPromptPostRequestBody: PlayPromptPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", playPromptPostRequestBody.clientContext);
            writer.writeCollectionOfObjectValuesFromMethod("prompts", playPromptPostRequestBody.prompts as any, serializePrompt);
}
