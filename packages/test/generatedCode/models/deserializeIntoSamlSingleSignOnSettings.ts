import {SamlSingleSignOnSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlSingleSignOnSettings(samlSingleSignOnSettings: SamlSingleSignOnSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { samlSingleSignOnSettings.odataType = n.getStringValue() as any ; },
        "relayState": n => { samlSingleSignOnSettings.relayState = n.getStringValue() as any ; },
    }
}
