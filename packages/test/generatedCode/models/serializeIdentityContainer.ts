import {IdentityContainer} from './index';
import {serializeB2xIdentityUserFlow} from './serializeB2xIdentityUserFlow';
import {serializeConditionalAccessRoot} from './serializeConditionalAccessRoot';
import {serializeEntity} from './serializeEntity';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityContainer(writer: SerializationWriter, identityContainer: IdentityContainer | undefined = {}) : void {
        serializeEntity(writer, identityContainer)
            writer.writeCollectionOfObjectValuesFromMethod("apiConnectors", identityContainer.apiConnectors as any, serializeIdentityApiConnector);
            writer.writeCollectionOfObjectValuesFromMethod("b2xUserFlows", identityContainer.b2xUserFlows as any, serializeB2xIdentityUserFlow);
            writer.writeObjectValueFromMethod("conditionalAccess", identityContainer.conditionalAccess as any, serializeConditionalAccessRoot);
            writer.writeCollectionOfObjectValuesFromMethod("identityProviders", identityContainer.identityProviders as any, serializeIdentityProviderBase);
            writer.writeCollectionOfObjectValuesFromMethod("userFlowAttributes", identityContainer.userFlowAttributes as any, serializeIdentityUserFlowAttribute);
}
