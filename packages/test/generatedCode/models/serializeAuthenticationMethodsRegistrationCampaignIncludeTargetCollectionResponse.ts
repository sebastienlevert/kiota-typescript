import {AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse} from './index';
import {serializeAuthenticationMethodsRegistrationCampaignIncludeTarget} from './serializeAuthenticationMethodsRegistrationCampaignIncludeTarget';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse(writer: SerializationWriter, authenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse: AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", authenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse.value as any, serializeAuthenticationMethodsRegistrationCampaignIncludeTarget);
}
