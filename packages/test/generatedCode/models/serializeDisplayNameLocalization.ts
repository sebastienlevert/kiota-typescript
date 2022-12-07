import {DisplayNameLocalization} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisplayNameLocalization(writer: SerializationWriter, displayNameLocalization: DisplayNameLocalization | undefined = {}) : void {
            writer.writeStringValue("displayName", displayNameLocalization.displayName);
            writer.writeStringValue("languageTag", displayNameLocalization.languageTag);
}
