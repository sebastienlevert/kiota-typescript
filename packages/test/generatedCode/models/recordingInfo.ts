import {IdentitySet} from './index';
import {RecordingStatus} from './recordingStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecordingInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identities of the recording initiator. */
    initiator?: IdentitySet;
    /** The OdataType property */
    odataType?: string;
    /** The recordingStatus property */
    recordingStatus?: RecordingStatus;
}
