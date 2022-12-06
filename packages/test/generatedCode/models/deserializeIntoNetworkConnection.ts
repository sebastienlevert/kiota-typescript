import {ConnectionDirection} from './connectionDirection';
import {ConnectionStatus} from './connectionStatus';
import {NetworkConnection} from './index';
import {SecurityNetworkProtocol} from './securityNetworkProtocol';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNetworkConnection(networkConnection: NetworkConnection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationName": n => { networkConnection.applicationName = n.getStringValue() as any ; },
        "destinationAddress": n => { networkConnection.destinationAddress = n.getStringValue() as any ; },
        "destinationDomain": n => { networkConnection.destinationDomain = n.getStringValue() as any ; },
        "destinationLocation": n => { networkConnection.destinationLocation = n.getStringValue() as any ; },
        "destinationPort": n => { networkConnection.destinationPort = n.getStringValue() as any ; },
        "destinationUrl": n => { networkConnection.destinationUrl = n.getStringValue() as any ; },
        "direction": n => { networkConnection.direction = n.getEnumValue<ConnectionDirection>(ConnectionDirection) as any ; },
        "domainRegisteredDateTime": n => { networkConnection.domainRegisteredDateTime = n.getDateValue() as any ; },
        "localDnsName": n => { networkConnection.localDnsName = n.getStringValue() as any ; },
        "natDestinationAddress": n => { networkConnection.natDestinationAddress = n.getStringValue() as any ; },
        "natDestinationPort": n => { networkConnection.natDestinationPort = n.getStringValue() as any ; },
        "natSourceAddress": n => { networkConnection.natSourceAddress = n.getStringValue() as any ; },
        "natSourcePort": n => { networkConnection.natSourcePort = n.getStringValue() as any ; },
        "@odata.type": n => { networkConnection.odataType = n.getStringValue() as any ; },
        "protocol": n => { networkConnection.protocol = n.getEnumValue<SecurityNetworkProtocol>(SecurityNetworkProtocol) as any ; },
        "riskScore": n => { networkConnection.riskScore = n.getStringValue() as any ; },
        "sourceAddress": n => { networkConnection.sourceAddress = n.getStringValue() as any ; },
        "sourceLocation": n => { networkConnection.sourceLocation = n.getStringValue() as any ; },
        "sourcePort": n => { networkConnection.sourcePort = n.getStringValue() as any ; },
        "status": n => { networkConnection.status = n.getEnumValue<ConnectionStatus>(ConnectionStatus) as any ; },
        "urlParameters": n => { networkConnection.urlParameters = n.getStringValue() as any ; },
    }
}
