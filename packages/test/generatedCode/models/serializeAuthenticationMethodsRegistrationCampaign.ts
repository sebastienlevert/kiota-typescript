import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodsRegistrationCampaign} from './index';
import {serializeAuthenticationMethodsRegistrationCampaignIncludeTarget} from './serializeAuthenticationMethodsRegistrationCampaignIncludeTarget';
import {serializeExcludeTarget} from './serializeExcludeTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsRegistrationCampaign(writer: SerializationWriter, authenticationMethodsRegistrationCampaign: AuthenticationMethodsRegistrationCampaign | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("excludeTargets", authenticationMethodsRegistrationCampaign.excludeTargets as any, serializeExcludeTarget);
            writer.writeCollectionOfObjectValuesFromMethod("includeTargets", authenticationMethodsRegistrationCampaign.includeTargets as any, serializeAuthenticationMethodsRegistrationCampaignIncludeTarget);
            writer.writeStringValue("@odata.type", authenticationMethodsRegistrationCampaign.odataType);
            writer.writeNumberValue("snoozeDurationInDays", authenticationMethodsRegistrationCampaign.snoozeDurationInDays);
            writer.writeEnumValue<AdvancedConfigState>("state", authenticationMethodsRegistrationCampaign.state);
}
