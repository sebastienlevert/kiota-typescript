import {deserializeIntoAuthenticationMethodsRegistrationCampaign} from './deserializeIntoAuthenticationMethodsRegistrationCampaign';
import {RegistrationEnforcement} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRegistrationEnforcement(registrationEnforcement: RegistrationEnforcement | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "authenticationMethodsRegistrationCampaign": n => { registrationEnforcement.authenticationMethodsRegistrationCampaign = n.getObject(deserializeIntoAuthenticationMethodsRegistrationCampaign) as any ; },
        "@odata.type": n => { registrationEnforcement.odataType = n.getStringValue() as any ; },
    }
}
