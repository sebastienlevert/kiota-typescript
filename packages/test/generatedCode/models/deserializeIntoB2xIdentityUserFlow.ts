import {deserializeIntoIdentityProvider} from './deserializeIntoIdentityProvider';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {deserializeIntoIdentityUserFlow} from './deserializeIntoIdentityUserFlow';
import {deserializeIntoIdentityUserFlowAttributeAssignment} from './deserializeIntoIdentityUserFlowAttributeAssignment';
import {deserializeIntoUserFlowApiConnectorConfiguration} from './deserializeIntoUserFlowApiConnectorConfiguration';
import {deserializeIntoUserFlowLanguageConfiguration} from './deserializeIntoUserFlowLanguageConfiguration';
import {B2xIdentityUserFlow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoB2xIdentityUserFlow(b2xIdentityUserFlow: B2xIdentityUserFlow | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityUserFlow(b2xIdentityUserFlow),
        "apiConnectorConfiguration": n => { b2xIdentityUserFlow.apiConnectorConfiguration = n.getObject(deserializeIntoUserFlowApiConnectorConfiguration) as any ; },
        "identityProviders": n => { b2xIdentityUserFlow.identityProviders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityProvider) as any ; },
        "languages": n => { b2xIdentityUserFlow.languages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserFlowLanguageConfiguration) as any ; },
        "userAttributeAssignments": n => { b2xIdentityUserFlow.userAttributeAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityUserFlowAttributeAssignment) as any ; },
        "userFlowIdentityProviders": n => { b2xIdentityUserFlow.userFlowIdentityProviders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityProviderBase) as any ; },
    }
}
