import {TeleconferenceDeviceMediaQuality} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeleconferenceDeviceQuality extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    callChainId?: string;
    /** A geo-region where the service is deployed, such as ProdNoam. */
    cloudServiceDeploymentEnvironment?: string;
    /** A unique deployment identifier assigned by Azure. */
    cloudServiceDeploymentId?: string;
    /** The Azure deployed cloud service instance name, such as FrontEnd_IN_3. */
    cloudServiceInstanceName?: string;
    /** The Azure deployed cloud service name, such as contoso.cloudapp.net. */
    cloudServiceName?: string;
    /** Any additional description, such as VTC Bldg 30/21. */
    deviceDescription?: string;
    /** The user media agent name, such as Cisco SX80. */
    deviceName?: string;
    /** A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value. */
    mediaLegId?: string;
    /** The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality. */
    mediaQualityList?: TeleconferenceDeviceMediaQuality[];
    /** The OdataType property */
    odataType?: string;
    /** A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property. */
    participantId?: string;
}
