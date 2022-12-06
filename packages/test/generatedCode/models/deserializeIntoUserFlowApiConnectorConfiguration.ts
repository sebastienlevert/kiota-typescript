import {deserializeIntoIdentityApiConnector} from './deserializeIntoIdentityApiConnector';
import {UserFlowApiConnectorConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowApiConnectorConfiguration(userFlowApiConnectorConfiguration: UserFlowApiConnectorConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userFlowApiConnectorConfiguration.odataType = n.getStringValue() as any ; },
        "postAttributeCollection": n => { userFlowApiConnectorConfiguration.postAttributeCollection = n.getObject(deserializeIntoIdentityApiConnector) as any ; },
        "postFederationSignup": n => { userFlowApiConnectorConfiguration.postFederationSignup = n.getObject(deserializeIntoIdentityApiConnector) as any ; },
    }
}
