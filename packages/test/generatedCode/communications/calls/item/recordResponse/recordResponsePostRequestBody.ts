import {Prompt} from '../../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecordResponsePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The bargeInAllowed property */
    bargeInAllowed?: boolean;
    /** The clientContext property */
    clientContext?: string;
    /** The initialSilenceTimeoutInSeconds property */
    initialSilenceTimeoutInSeconds?: number;
    /** The maxRecordDurationInSeconds property */
    maxRecordDurationInSeconds?: number;
    /** The maxSilenceTimeoutInSeconds property */
    maxSilenceTimeoutInSeconds?: number;
    /** The playBeep property */
    playBeep?: boolean;
    /** The prompts property */
    prompts?: Prompt[];
    /** The stopTones property */
    stopTones?: string[];
}
