import {deserializeIntoB2xIdentityUserFlow} from './deserializeIntoB2xIdentityUserFlow';
import {deserializeIntoConditionalAccessRoot} from './deserializeIntoConditionalAccessRoot';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentityApiConnector} from './deserializeIntoIdentityApiConnector';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {deserializeIntoIdentityUserFlowAttribute} from './deserializeIntoIdentityUserFlowAttribute';
import {IdentityContainer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityContainer(identityContainer: IdentityContainer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityContainer),
        "apiConnectors": n => { identityContainer.apiConnectors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityApiConnector) as any ; },
        "b2xUserFlows": n => { identityContainer.b2xUserFlows = n.getCollectionOfObjectValuesFromMethod(deserializeIntoB2xIdentityUserFlow) as any ; },
        "conditionalAccess": n => { identityContainer.conditionalAccess = n.getObject(deserializeIntoConditionalAccessRoot) as any ; },
        "identityProviders": n => { identityContainer.identityProviders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityProviderBase) as any ; },
        "userFlowAttributes": n => { identityContainer.userFlowAttributes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityUserFlowAttribute) as any ; },
    }
}
