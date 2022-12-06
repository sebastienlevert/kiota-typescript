import {AdvancedConfigState} from './advancedConfigState';
import {deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget} from './deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget';
import {deserializeIntoExcludeTarget} from './deserializeIntoExcludeTarget';
import {AuthenticationMethodsRegistrationCampaign} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodsRegistrationCampaign(authenticationMethodsRegistrationCampaign: AuthenticationMethodsRegistrationCampaign | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeTargets": n => { authenticationMethodsRegistrationCampaign.excludeTargets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExcludeTarget) as any ; },
        "includeTargets": n => { authenticationMethodsRegistrationCampaign.includeTargets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget) as any ; },
        "@odata.type": n => { authenticationMethodsRegistrationCampaign.odataType = n.getStringValue() as any ; },
        "snoozeDurationInDays": n => { authenticationMethodsRegistrationCampaign.snoozeDurationInDays = n.getNumberValue() as any ; },
        "state": n => { authenticationMethodsRegistrationCampaign.state = n.getEnumValue<AdvancedConfigState>(AdvancedConfigState) as any ; },
    }
}
