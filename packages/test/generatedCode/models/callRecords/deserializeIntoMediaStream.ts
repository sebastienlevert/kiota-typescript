import {AudioCodec} from './audioCodec';
import {MediaStream} from './index';
import {MediaStreamDirection} from './mediaStreamDirection';
import {VideoCodec} from './videoCodec';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaStream(mediaStream: MediaStream | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "audioCodec": n => { mediaStream.audioCodec = n.getEnumValue<AudioCodec>(AudioCodec) as any ; },
        "averageAudioDegradation": n => { mediaStream.averageAudioDegradation = n.getNumberValue() as any ; },
        "averageAudioNetworkJitter": n => { mediaStream.averageAudioNetworkJitter = n.getDurationValue() as any ; },
        "averageBandwidthEstimate": n => { mediaStream.averageBandwidthEstimate = n.getNumberValue() as any ; },
        "averageJitter": n => { mediaStream.averageJitter = n.getDurationValue() as any ; },
        "averagePacketLossRate": n => { mediaStream.averagePacketLossRate = n.getNumberValue() as any ; },
        "averageRatioOfConcealedSamples": n => { mediaStream.averageRatioOfConcealedSamples = n.getNumberValue() as any ; },
        "averageReceivedFrameRate": n => { mediaStream.averageReceivedFrameRate = n.getNumberValue() as any ; },
        "averageRoundTripTime": n => { mediaStream.averageRoundTripTime = n.getDurationValue() as any ; },
        "averageVideoFrameLossPercentage": n => { mediaStream.averageVideoFrameLossPercentage = n.getNumberValue() as any ; },
        "averageVideoFrameRate": n => { mediaStream.averageVideoFrameRate = n.getNumberValue() as any ; },
        "averageVideoPacketLossRate": n => { mediaStream.averageVideoPacketLossRate = n.getNumberValue() as any ; },
        "endDateTime": n => { mediaStream.endDateTime = n.getDateValue() as any ; },
        "lowFrameRateRatio": n => { mediaStream.lowFrameRateRatio = n.getNumberValue() as any ; },
        "lowVideoProcessingCapabilityRatio": n => { mediaStream.lowVideoProcessingCapabilityRatio = n.getNumberValue() as any ; },
        "maxAudioNetworkJitter": n => { mediaStream.maxAudioNetworkJitter = n.getDurationValue() as any ; },
        "maxJitter": n => { mediaStream.maxJitter = n.getDurationValue() as any ; },
        "maxPacketLossRate": n => { mediaStream.maxPacketLossRate = n.getNumberValue() as any ; },
        "maxRatioOfConcealedSamples": n => { mediaStream.maxRatioOfConcealedSamples = n.getNumberValue() as any ; },
        "maxRoundTripTime": n => { mediaStream.maxRoundTripTime = n.getDurationValue() as any ; },
        "@odata.type": n => { mediaStream.odataType = n.getStringValue() as any ; },
        "packetUtilization": n => { mediaStream.packetUtilization = n.getNumberValue() as any ; },
        "postForwardErrorCorrectionPacketLossRate": n => { mediaStream.postForwardErrorCorrectionPacketLossRate = n.getNumberValue() as any ; },
        "startDateTime": n => { mediaStream.startDateTime = n.getDateValue() as any ; },
        "streamDirection": n => { mediaStream.streamDirection = n.getEnumValue<MediaStreamDirection>(MediaStreamDirection) as any ; },
        "streamId": n => { mediaStream.streamId = n.getStringValue() as any ; },
        "videoCodec": n => { mediaStream.videoCodec = n.getEnumValue<VideoCodec>(VideoCodec) as any ; },
        "wasMediaBypassed": n => { mediaStream.wasMediaBypassed = n.getBooleanValue() as any ; },
    }
}
