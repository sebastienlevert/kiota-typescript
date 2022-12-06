import {deserializeIntoAuthenticationMethodFeatureConfiguration} from './deserializeIntoAuthenticationMethodFeatureConfiguration';
import {MicrosoftAuthenticatorFeatureSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorFeatureSettings(microsoftAuthenticatorFeatureSettings: MicrosoftAuthenticatorFeatureSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayAppInformationRequiredState": n => { microsoftAuthenticatorFeatureSettings.displayAppInformationRequiredState = n.getObject(deserializeIntoAuthenticationMethodFeatureConfiguration) as any ; },
        "displayLocationInformationRequiredState": n => { microsoftAuthenticatorFeatureSettings.displayLocationInformationRequiredState = n.getObject(deserializeIntoAuthenticationMethodFeatureConfiguration) as any ; },
        "@odata.type": n => { microsoftAuthenticatorFeatureSettings.odataType = n.getStringValue() as any ; },
    }
}
