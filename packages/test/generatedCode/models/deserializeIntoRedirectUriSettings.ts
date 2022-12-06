import {RedirectUriSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRedirectUriSettings(redirectUriSettings: RedirectUriSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "index": n => { redirectUriSettings.index = n.getNumberValue() as any ; },
        "@odata.type": n => { redirectUriSettings.odataType = n.getStringValue() as any ; },
        "uri": n => { redirectUriSettings.uri = n.getStringValue() as any ; },
    }
}
