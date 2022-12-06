import {DeviceExchangeAccessStateSummary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceExchangeAccessStateSummary(deviceExchangeAccessStateSummary: DeviceExchangeAccessStateSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedDeviceCount": n => { deviceExchangeAccessStateSummary.allowedDeviceCount = n.getNumberValue() as any ; },
        "blockedDeviceCount": n => { deviceExchangeAccessStateSummary.blockedDeviceCount = n.getNumberValue() as any ; },
        "@odata.type": n => { deviceExchangeAccessStateSummary.odataType = n.getStringValue() as any ; },
        "quarantinedDeviceCount": n => { deviceExchangeAccessStateSummary.quarantinedDeviceCount = n.getNumberValue() as any ; },
        "unavailableDeviceCount": n => { deviceExchangeAccessStateSummary.unavailableDeviceCount = n.getNumberValue() as any ; },
        "unknownDeviceCount": n => { deviceExchangeAccessStateSummary.unknownDeviceCount = n.getNumberValue() as any ; },
    }
}
