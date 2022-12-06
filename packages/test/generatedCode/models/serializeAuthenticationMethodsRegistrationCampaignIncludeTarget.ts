import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsRegistrationCampaignIncludeTarget(writer: SerializationWriter, authenticationMethodsRegistrationCampaignIncludeTarget: AuthenticationMethodsRegistrationCampaignIncludeTarget | undefined = {}) : void {
            writer.writeStringValue("id", authenticationMethodsRegistrationCampaignIncludeTarget.id);
            writer.writeStringValue("@odata.type", authenticationMethodsRegistrationCampaignIncludeTarget.odataType);
            writer.writeStringValue("targetedAuthenticationMethod", authenticationMethodsRegistrationCampaignIncludeTarget.targetedAuthenticationMethod);
            writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", authenticationMethodsRegistrationCampaignIncludeTarget.targetType);
}
