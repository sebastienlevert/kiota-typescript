import {KeyValuePair} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CloudPcStatusDetails extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Any additional information about the Cloud PC status. */
    additionalInformation?: KeyValuePair[];
    /** The code associated with the Cloud PC status. */
    code?: string;
    /** The status message. */
    message?: string;
}
