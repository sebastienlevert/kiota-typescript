import {AudioCodec} from './audioCodec';
import {MediaStream} from './index';
import {MediaStreamDirection} from './mediaStreamDirection';
import {VideoCodec} from './videoCodec';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaStream(writer: SerializationWriter, mediaStream: MediaStream | undefined = {}) : void {
            writer.writeEnumValue<AudioCodec>("audioCodec", mediaStream.audioCodec);
            writer.writeNumberValue("averageAudioDegradation", mediaStream.averageAudioDegradation);
            writer.writeDurationValue("averageAudioNetworkJitter", mediaStream.averageAudioNetworkJitter);
            writer.writeNumberValue("averageBandwidthEstimate", mediaStream.averageBandwidthEstimate);
            writer.writeDurationValue("averageJitter", mediaStream.averageJitter);
            writer.writeNumberValue("averagePacketLossRate", mediaStream.averagePacketLossRate);
            writer.writeNumberValue("averageRatioOfConcealedSamples", mediaStream.averageRatioOfConcealedSamples);
            writer.writeNumberValue("averageReceivedFrameRate", mediaStream.averageReceivedFrameRate);
            writer.writeDurationValue("averageRoundTripTime", mediaStream.averageRoundTripTime);
            writer.writeNumberValue("averageVideoFrameLossPercentage", mediaStream.averageVideoFrameLossPercentage);
            writer.writeNumberValue("averageVideoFrameRate", mediaStream.averageVideoFrameRate);
            writer.writeNumberValue("averageVideoPacketLossRate", mediaStream.averageVideoPacketLossRate);
            writer.writeDateValue("endDateTime", mediaStream.endDateTime);
            writer.writeNumberValue("lowFrameRateRatio", mediaStream.lowFrameRateRatio);
            writer.writeNumberValue("lowVideoProcessingCapabilityRatio", mediaStream.lowVideoProcessingCapabilityRatio);
            writer.writeDurationValue("maxAudioNetworkJitter", mediaStream.maxAudioNetworkJitter);
            writer.writeDurationValue("maxJitter", mediaStream.maxJitter);
            writer.writeNumberValue("maxPacketLossRate", mediaStream.maxPacketLossRate);
            writer.writeNumberValue("maxRatioOfConcealedSamples", mediaStream.maxRatioOfConcealedSamples);
            writer.writeDurationValue("maxRoundTripTime", mediaStream.maxRoundTripTime);
            writer.writeStringValue("@odata.type", mediaStream.odataType);
            writer.writeNumberValue("packetUtilization", mediaStream.packetUtilization);
            writer.writeNumberValue("postForwardErrorCorrectionPacketLossRate", mediaStream.postForwardErrorCorrectionPacketLossRate);
            writer.writeDateValue("startDateTime", mediaStream.startDateTime);
            writer.writeEnumValue<MediaStreamDirection>("streamDirection", mediaStream.streamDirection);
            writer.writeStringValue("streamId", mediaStream.streamId);
            writer.writeEnumValue<VideoCodec>("videoCodec", mediaStream.videoCodec);
            writer.writeBooleanValue("wasMediaBypassed", mediaStream.wasMediaBypassed);
}
