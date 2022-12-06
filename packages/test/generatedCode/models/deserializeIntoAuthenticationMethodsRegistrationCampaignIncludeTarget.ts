import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget(authenticationMethodsRegistrationCampaignIncludeTarget: AuthenticationMethodsRegistrationCampaignIncludeTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { authenticationMethodsRegistrationCampaignIncludeTarget.id = n.getStringValue() as any ; },
        "@odata.type": n => { authenticationMethodsRegistrationCampaignIncludeTarget.odataType = n.getStringValue() as any ; },
        "targetedAuthenticationMethod": n => { authenticationMethodsRegistrationCampaignIncludeTarget.targetedAuthenticationMethod = n.getStringValue() as any ; },
        "targetType": n => { authenticationMethodsRegistrationCampaignIncludeTarget.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType) as any ; },
    }
}
