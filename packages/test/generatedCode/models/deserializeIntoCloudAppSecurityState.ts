import {CloudAppSecurityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudAppSecurityState(cloudAppSecurityState: CloudAppSecurityState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationServiceIp": n => { cloudAppSecurityState.destinationServiceIp = n.getStringValue() as any ; },
        "destinationServiceName": n => { cloudAppSecurityState.destinationServiceName = n.getStringValue() as any ; },
        "@odata.type": n => { cloudAppSecurityState.odataType = n.getStringValue() as any ; },
        "riskScore": n => { cloudAppSecurityState.riskScore = n.getStringValue() as any ; },
    }
}
