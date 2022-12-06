import {B2xIdentityUserFlow} from './index';
import {serializeIdentityProvider} from './serializeIdentityProvider';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeIdentityUserFlow} from './serializeIdentityUserFlow';
import {serializeIdentityUserFlowAttributeAssignment} from './serializeIdentityUserFlowAttributeAssignment';
import {serializeUserFlowApiConnectorConfiguration} from './serializeUserFlowApiConnectorConfiguration';
import {serializeUserFlowLanguageConfiguration} from './serializeUserFlowLanguageConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeB2xIdentityUserFlow(writer: SerializationWriter, b2xIdentityUserFlow: B2xIdentityUserFlow | undefined = {}) : void {
        serializeIdentityUserFlow(writer, b2xIdentityUserFlow)
            writer.writeObjectValueFromMethod("apiConnectorConfiguration", b2xIdentityUserFlow.apiConnectorConfiguration as any, serializeUserFlowApiConnectorConfiguration);
            writer.writeCollectionOfObjectValuesFromMethod("identityProviders", b2xIdentityUserFlow.identityProviders as any, serializeIdentityProvider);
            writer.writeCollectionOfObjectValuesFromMethod("languages", b2xIdentityUserFlow.languages as any, serializeUserFlowLanguageConfiguration);
            writer.writeCollectionOfObjectValuesFromMethod("userAttributeAssignments", b2xIdentityUserFlow.userAttributeAssignments as any, serializeIdentityUserFlowAttributeAssignment);
            writer.writeCollectionOfObjectValuesFromMethod("userFlowIdentityProviders", b2xIdentityUserFlow.userFlowIdentityProviders as any, serializeIdentityProviderBase);
}
