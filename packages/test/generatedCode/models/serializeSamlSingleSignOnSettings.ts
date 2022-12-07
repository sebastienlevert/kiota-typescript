import {SamlSingleSignOnSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSamlSingleSignOnSettings(writer: SerializationWriter, samlSingleSignOnSettings: SamlSingleSignOnSettings | undefined = {}) : void {
            writer.writeStringValue("relayState", samlSingleSignOnSettings.relayState);
}
