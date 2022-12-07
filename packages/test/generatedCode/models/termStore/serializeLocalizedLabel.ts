import {LocalizedLabel} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedLabel(writer: SerializationWriter, localizedLabel: LocalizedLabel | undefined = {}) : void {
            writer.writeBooleanValue("isDefault", localizedLabel.isDefault);
            writer.writeStringValue("languageTag", localizedLabel.languageTag);
            writer.writeStringValue("name", localizedLabel.name);
}
