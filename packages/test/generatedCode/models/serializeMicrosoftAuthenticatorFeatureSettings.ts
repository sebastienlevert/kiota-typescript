import {MicrosoftAuthenticatorFeatureSettings} from './index';
import {serializeAuthenticationMethodFeatureConfiguration} from './serializeAuthenticationMethodFeatureConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorFeatureSettings(writer: SerializationWriter, microsoftAuthenticatorFeatureSettings: MicrosoftAuthenticatorFeatureSettings | undefined = {}) : void {
            writer.writeObjectValueFromMethod("displayAppInformationRequiredState", microsoftAuthenticatorFeatureSettings.displayAppInformationRequiredState as any, serializeAuthenticationMethodFeatureConfiguration);
            writer.writeObjectValueFromMethod("displayLocationInformationRequiredState", microsoftAuthenticatorFeatureSettings.displayLocationInformationRequiredState as any, serializeAuthenticationMethodFeatureConfiguration);
            writer.writeStringValue("@odata.type", microsoftAuthenticatorFeatureSettings.odataType);
}
