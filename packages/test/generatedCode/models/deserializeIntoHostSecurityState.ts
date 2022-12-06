import {HostSecurityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostSecurityState(hostSecurityState: HostSecurityState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "fqdn": n => { hostSecurityState.fqdn = n.getStringValue() as any ; },
        "isAzureAdJoined": n => { hostSecurityState.isAzureAdJoined = n.getBooleanValue() as any ; },
        "isAzureAdRegistered": n => { hostSecurityState.isAzureAdRegistered = n.getBooleanValue() as any ; },
        "isHybridAzureDomainJoined": n => { hostSecurityState.isHybridAzureDomainJoined = n.getBooleanValue() as any ; },
        "netBiosName": n => { hostSecurityState.netBiosName = n.getStringValue() as any ; },
        "@odata.type": n => { hostSecurityState.odataType = n.getStringValue() as any ; },
        "os": n => { hostSecurityState.os = n.getStringValue() as any ; },
        "privateIpAddress": n => { hostSecurityState.privateIpAddress = n.getStringValue() as any ; },
        "publicIpAddress": n => { hostSecurityState.publicIpAddress = n.getStringValue() as any ; },
        "riskScore": n => { hostSecurityState.riskScore = n.getStringValue() as any ; },
    }
}
