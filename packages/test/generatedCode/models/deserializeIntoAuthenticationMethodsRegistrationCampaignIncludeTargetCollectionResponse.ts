import {deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget} from './deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse(authenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse: AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse),
        "value": n => { authenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodsRegistrationCampaignIncludeTarget) as any ; },
    }
}
