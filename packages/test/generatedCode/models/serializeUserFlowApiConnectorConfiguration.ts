import {UserFlowApiConnectorConfiguration} from './index';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowApiConnectorConfiguration(writer: SerializationWriter, userFlowApiConnectorConfiguration: UserFlowApiConnectorConfiguration | undefined = {}) : void {
            writer.writeStringValue("@odata.type", userFlowApiConnectorConfiguration.odataType);
            writer.writeObjectValueFromMethod("postAttributeCollection", userFlowApiConnectorConfiguration.postAttributeCollection as any, serializeIdentityApiConnector);
            writer.writeObjectValueFromMethod("postFederationSignup", userFlowApiConnectorConfiguration.postFederationSignup as any, serializeIdentityApiConnector);
}
