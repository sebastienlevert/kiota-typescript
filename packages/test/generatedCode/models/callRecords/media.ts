import {DeviceInfo, MediaStream, NetworkInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Media extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Device information associated with the callee endpoint of this media. */
    calleeDevice?: DeviceInfo;
    /** Network information associated with the callee endpoint of this media. */
    calleeNetwork?: NetworkInfo;
    /** Device information associated with the caller endpoint of this media. */
    callerDevice?: DeviceInfo;
    /** Network information associated with the caller endpoint of this media. */
    callerNetwork?: NetworkInfo;
    /** How the media was identified during media negotiation stage. */
    label?: string;
    /** The OdataType property */
    odataType?: string;
    /** Network streams associated with this media. */
    streams?: MediaStream[];
}
