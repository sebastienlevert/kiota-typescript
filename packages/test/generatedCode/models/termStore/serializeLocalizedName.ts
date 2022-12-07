import {LocalizedName} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedName(writer: SerializationWriter, localizedName: LocalizedName | undefined = {}) : void {
            writer.writeStringValue("languageTag", localizedName.languageTag);
            writer.writeStringValue("name", localizedName.name);
}
