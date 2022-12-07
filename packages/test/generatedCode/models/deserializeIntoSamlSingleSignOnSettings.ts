import {SamlSingleSignOnSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlSingleSignOnSettings(samlSingleSignOnSettings: SamlSingleSignOnSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "relayState": n => { samlSingleSignOnSettings.relayState = n.getStringValue() as any ; },
    }
}
