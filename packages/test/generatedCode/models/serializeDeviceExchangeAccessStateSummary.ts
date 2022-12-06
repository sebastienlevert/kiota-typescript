import {DeviceExchangeAccessStateSummary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceExchangeAccessStateSummary(writer: SerializationWriter, deviceExchangeAccessStateSummary: DeviceExchangeAccessStateSummary | undefined = {}) : void {
            writer.writeNumberValue("allowedDeviceCount", deviceExchangeAccessStateSummary.allowedDeviceCount);
            writer.writeNumberValue("blockedDeviceCount", deviceExchangeAccessStateSummary.blockedDeviceCount);
            writer.writeStringValue("@odata.type", deviceExchangeAccessStateSummary.odataType);
            writer.writeNumberValue("quarantinedDeviceCount", deviceExchangeAccessStateSummary.quarantinedDeviceCount);
            writer.writeNumberValue("unavailableDeviceCount", deviceExchangeAccessStateSummary.unavailableDeviceCount);
            writer.writeNumberValue("unknownDeviceCount", deviceExchangeAccessStateSummary.unknownDeviceCount);
}
