import {Prompt} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrompt(writer: SerializationWriter, prompt: Prompt | undefined = {}) : void {
            writer.writeStringValue("@odata.type", prompt.odataType);
}
