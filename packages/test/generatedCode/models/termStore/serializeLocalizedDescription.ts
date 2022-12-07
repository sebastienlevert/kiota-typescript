import {LocalizedDescription} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedDescription(writer: SerializationWriter, localizedDescription: LocalizedDescription | undefined = {}) : void {
            writer.writeStringValue("description", localizedDescription.description);
            writer.writeStringValue("languageTag", localizedDescription.languageTag);
}
