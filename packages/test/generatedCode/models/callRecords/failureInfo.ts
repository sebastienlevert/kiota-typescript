import {FailureStage} from './failureStage';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FailureInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Classification of why a call or portion of a call failed. */
    reason?: string;
    /** The stage property */
    stage?: FailureStage;
}
