import {RegistrationEnforcement} from './index';
import {serializeAuthenticationMethodsRegistrationCampaign} from './serializeAuthenticationMethodsRegistrationCampaign';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegistrationEnforcement(writer: SerializationWriter, registrationEnforcement: RegistrationEnforcement | undefined = {}) : void {
            writer.writeObjectValueFromMethod("authenticationMethodsRegistrationCampaign", registrationEnforcement.authenticationMethodsRegistrationCampaign as any, serializeAuthenticationMethodsRegistrationCampaign);
            writer.writeStringValue("@odata.type", registrationEnforcement.odataType);
}
