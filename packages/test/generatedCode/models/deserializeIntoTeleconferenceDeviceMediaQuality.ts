import {TeleconferenceDeviceMediaQuality} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceMediaQuality(teleconferenceDeviceMediaQuality: TeleconferenceDeviceMediaQuality | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "averageInboundJitter": n => { teleconferenceDeviceMediaQuality.averageInboundJitter = n.getDurationValue() as any ; },
        "averageInboundPacketLossRateInPercentage": n => { teleconferenceDeviceMediaQuality.averageInboundPacketLossRateInPercentage = n.getNumberValue() as any ; },
        "averageInboundRoundTripDelay": n => { teleconferenceDeviceMediaQuality.averageInboundRoundTripDelay = n.getDurationValue() as any ; },
        "averageOutboundJitter": n => { teleconferenceDeviceMediaQuality.averageOutboundJitter = n.getDurationValue() as any ; },
        "averageOutboundPacketLossRateInPercentage": n => { teleconferenceDeviceMediaQuality.averageOutboundPacketLossRateInPercentage = n.getNumberValue() as any ; },
        "averageOutboundRoundTripDelay": n => { teleconferenceDeviceMediaQuality.averageOutboundRoundTripDelay = n.getDurationValue() as any ; },
        "channelIndex": n => { teleconferenceDeviceMediaQuality.channelIndex = n.getNumberValue() as any ; },
        "inboundPackets": n => { teleconferenceDeviceMediaQuality.inboundPackets = n.getNumberValue() as any ; },
        "localIPAddress": n => { teleconferenceDeviceMediaQuality.localIPAddress = n.getStringValue() as any ; },
        "localPort": n => { teleconferenceDeviceMediaQuality.localPort = n.getNumberValue() as any ; },
        "maximumInboundJitter": n => { teleconferenceDeviceMediaQuality.maximumInboundJitter = n.getDurationValue() as any ; },
        "maximumInboundPacketLossRateInPercentage": n => { teleconferenceDeviceMediaQuality.maximumInboundPacketLossRateInPercentage = n.getNumberValue() as any ; },
        "maximumInboundRoundTripDelay": n => { teleconferenceDeviceMediaQuality.maximumInboundRoundTripDelay = n.getDurationValue() as any ; },
        "maximumOutboundJitter": n => { teleconferenceDeviceMediaQuality.maximumOutboundJitter = n.getDurationValue() as any ; },
        "maximumOutboundPacketLossRateInPercentage": n => { teleconferenceDeviceMediaQuality.maximumOutboundPacketLossRateInPercentage = n.getNumberValue() as any ; },
        "maximumOutboundRoundTripDelay": n => { teleconferenceDeviceMediaQuality.maximumOutboundRoundTripDelay = n.getDurationValue() as any ; },
        "mediaDuration": n => { teleconferenceDeviceMediaQuality.mediaDuration = n.getDurationValue() as any ; },
        "networkLinkSpeedInBytes": n => { teleconferenceDeviceMediaQuality.networkLinkSpeedInBytes = n.getNumberValue() as any ; },
        "@odata.type": n => { teleconferenceDeviceMediaQuality.odataType = n.getStringValue() as any ; },
        "outboundPackets": n => { teleconferenceDeviceMediaQuality.outboundPackets = n.getNumberValue() as any ; },
        "remoteIPAddress": n => { teleconferenceDeviceMediaQuality.remoteIPAddress = n.getStringValue() as any ; },
        "remotePort": n => { teleconferenceDeviceMediaQuality.remotePort = n.getNumberValue() as any ; },
    }
}
