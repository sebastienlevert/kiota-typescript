import {TraceRouteHop} from './index';
import {NetworkConnectionType} from './networkConnectionType';
import {NetworkTransportProtocol} from './networkTransportProtocol';
import {WifiBand} from './wifiBand';
import {WifiRadioType} from './wifiRadioType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface NetworkInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Fraction of the call that the media endpoint detected the available bandwidth or bandwidth policy was low enough to cause poor quality of the audio sent. */
    bandwidthLowEventRatio?: number;
    /** The wireless LAN basic service set identifier of the media endpoint used to connect to the network. */
    basicServiceSetIdentifier?: string;
    /** The connectionType property */
    connectionType?: NetworkConnectionType;
    /** Fraction of the call that the media endpoint detected the network delay was significant enough to impact the ability to have real-time two-way communication. */
    delayEventRatio?: number;
    /** DNS suffix associated with the network adapter of the media endpoint. */
    dnsSuffix?: string;
    /** IP address of the media endpoint. */
    ipAddress?: string;
    /** Link speed in bits per second reported by the network adapter used by the media endpoint. */
    linkSpeed?: number;
    /** The media access control (MAC) address of the media endpoint's network device. */
    macAddress?: string;
    /** The networkTransportProtocol property */
    networkTransportProtocol?: NetworkTransportProtocol;
    /** The OdataType property */
    odataType?: string;
    /** Network port number used by media endpoint. */
    port?: number;
    /** Fraction of the call that the media endpoint detected the network was causing poor quality of the audio received. */
    receivedQualityEventRatio?: number;
    /** IP address of the media endpoint as seen by the media relay server. This is typically the public internet IP address associated to the endpoint. */
    reflexiveIPAddress?: string;
    /** IP address of the media relay server allocated by the media endpoint. */
    relayIPAddress?: string;
    /** Network port number allocated on the media relay server by the media endpoint. */
    relayPort?: number;
    /** Fraction of the call that the media endpoint detected the network was causing poor quality of the audio sent. */
    sentQualityEventRatio?: number;
    /** Subnet used for media stream by the media endpoint. */
    subnet?: string;
    /** List of network trace route hops collected for this media stream.* */
    traceRouteHops?: TraceRouteHop[];
    /** The wifiBand property */
    wifiBand?: WifiBand;
    /** Estimated remaining battery charge in percentage reported by the media endpoint. */
    wifiBatteryCharge?: number;
    /** WiFi channel used by the media endpoint. */
    wifiChannel?: number;
    /** Name of the Microsoft WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint. */
    wifiMicrosoftDriver?: string;
    /** Version of the Microsoft WiFi driver used by the media endpoint. */
    wifiMicrosoftDriverVersion?: string;
    /** The wifiRadioType property */
    wifiRadioType?: WifiRadioType;
    /** WiFi signal strength in percentage reported by the media endpoint. */
    wifiSignalStrength?: number;
    /** Name of the WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint. */
    wifiVendorDriver?: string;
    /** Version of the WiFi driver used by the media endpoint. */
    wifiVendorDriverVersion?: string;
}
