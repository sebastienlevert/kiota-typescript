import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface TeleconferenceDeviceMediaQuality extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The average inbound stream network jitter. */
    averageInboundJitter?: Duration;
    /** The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    averageInboundPacketLossRateInPercentage?: number;
    /** The average inbound stream network round trip delay. */
    averageInboundRoundTripDelay?: Duration;
    /** The average outbound stream network jitter. */
    averageOutboundJitter?: Duration;
    /** The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    averageOutboundPacketLossRateInPercentage?: number;
    /** The average outbound stream network round trip delay. */
    averageOutboundRoundTripDelay?: Duration;
    /** The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3. */
    channelIndex?: number;
    /** The total number of the inbound packets. */
    inboundPackets?: number;
    /** the local IP address for the media session. */
    localIPAddress?: string;
    /** The local media port. */
    localPort?: number;
    /** The maximum inbound stream network jitter. */
    maximumInboundJitter?: Duration;
    /** The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    maximumInboundPacketLossRateInPercentage?: number;
    /** The maximum inbound stream network round trip delay. */
    maximumInboundRoundTripDelay?: Duration;
    /** The maximum outbound stream network jitter. */
    maximumOutboundJitter?: Duration;
    /** The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%. */
    maximumOutboundPacketLossRateInPercentage?: number;
    /** The maximum outbound stream network round trip delay. */
    maximumOutboundRoundTripDelay?: Duration;
    /** The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations. */
    mediaDuration?: Duration;
    /** The network link speed in bytes */
    networkLinkSpeedInBytes?: number;
    /** The OdataType property */
    odataType?: string;
    /** The total number of the outbound packets. */
    outboundPackets?: number;
    /** The remote IP address for the media session. */
    remoteIPAddress?: string;
    /** The remote media port. */
    remotePort?: number;
}
