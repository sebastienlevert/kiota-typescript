import {deserializeIntoTraceRouteHop} from './deserializeIntoTraceRouteHop';
import {NetworkInfo} from './index';
import {NetworkConnectionType} from './networkConnectionType';
import {NetworkTransportProtocol} from './networkTransportProtocol';
import {WifiBand} from './wifiBand';
import {WifiRadioType} from './wifiRadioType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNetworkInfo(networkInfo: NetworkInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bandwidthLowEventRatio": n => { networkInfo.bandwidthLowEventRatio = n.getNumberValue() as any ; },
        "basicServiceSetIdentifier": n => { networkInfo.basicServiceSetIdentifier = n.getStringValue() as any ; },
        "connectionType": n => { networkInfo.connectionType = n.getEnumValue<NetworkConnectionType>(NetworkConnectionType) as any ; },
        "delayEventRatio": n => { networkInfo.delayEventRatio = n.getNumberValue() as any ; },
        "dnsSuffix": n => { networkInfo.dnsSuffix = n.getStringValue() as any ; },
        "ipAddress": n => { networkInfo.ipAddress = n.getStringValue() as any ; },
        "linkSpeed": n => { networkInfo.linkSpeed = n.getNumberValue() as any ; },
        "macAddress": n => { networkInfo.macAddress = n.getStringValue() as any ; },
        "networkTransportProtocol": n => { networkInfo.networkTransportProtocol = n.getEnumValue<NetworkTransportProtocol>(NetworkTransportProtocol) as any ; },
        "@odata.type": n => { networkInfo.odataType = n.getStringValue() as any ; },
        "port": n => { networkInfo.port = n.getNumberValue() as any ; },
        "receivedQualityEventRatio": n => { networkInfo.receivedQualityEventRatio = n.getNumberValue() as any ; },
        "reflexiveIPAddress": n => { networkInfo.reflexiveIPAddress = n.getStringValue() as any ; },
        "relayIPAddress": n => { networkInfo.relayIPAddress = n.getStringValue() as any ; },
        "relayPort": n => { networkInfo.relayPort = n.getNumberValue() as any ; },
        "sentQualityEventRatio": n => { networkInfo.sentQualityEventRatio = n.getNumberValue() as any ; },
        "subnet": n => { networkInfo.subnet = n.getStringValue() as any ; },
        "traceRouteHops": n => { networkInfo.traceRouteHops = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTraceRouteHop) as any ; },
        "wifiBand": n => { networkInfo.wifiBand = n.getEnumValue<WifiBand>(WifiBand) as any ; },
        "wifiBatteryCharge": n => { networkInfo.wifiBatteryCharge = n.getNumberValue() as any ; },
        "wifiChannel": n => { networkInfo.wifiChannel = n.getNumberValue() as any ; },
        "wifiMicrosoftDriver": n => { networkInfo.wifiMicrosoftDriver = n.getStringValue() as any ; },
        "wifiMicrosoftDriverVersion": n => { networkInfo.wifiMicrosoftDriverVersion = n.getStringValue() as any ; },
        "wifiRadioType": n => { networkInfo.wifiRadioType = n.getEnumValue<WifiRadioType>(WifiRadioType) as any ; },
        "wifiSignalStrength": n => { networkInfo.wifiSignalStrength = n.getNumberValue() as any ; },
        "wifiVendorDriver": n => { networkInfo.wifiVendorDriver = n.getStringValue() as any ; },
        "wifiVendorDriverVersion": n => { networkInfo.wifiVendorDriverVersion = n.getStringValue() as any ; },
    }
}
