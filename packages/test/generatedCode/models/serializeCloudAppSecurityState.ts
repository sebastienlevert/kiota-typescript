import {CloudAppSecurityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudAppSecurityState(writer: SerializationWriter, cloudAppSecurityState: CloudAppSecurityState | undefined = {}) : void {
            writer.writeStringValue("destinationServiceIp", cloudAppSecurityState.destinationServiceIp);
            writer.writeStringValue("destinationServiceName", cloudAppSecurityState.destinationServiceName);
            writer.writeStringValue("@odata.type", cloudAppSecurityState.odataType);
            writer.writeStringValue("riskScore", cloudAppSecurityState.riskScore);
}
