import {IncomingCallOptions, MediaConfig} from '../../../../models/';
import {Modality} from '../../../../models/modality';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AnswerPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The acceptedModalities property */
    acceptedModalities?: Modality[];
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The callbackUri property */
    callbackUri?: string;
    /** The callOptions property */
    callOptions?: IncomingCallOptions;
    /** The mediaConfig property */
    mediaConfig?: MediaConfig;
    /** The participantCapacity property */
    participantCapacity?: number;
}
