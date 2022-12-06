import {ItemReference} from '../../../../../../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CopyToDefaultContentLocationPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The destinationFileName property */
    destinationFileName?: string;
    /** The sourceFile property */
    sourceFile?: ItemReference;
}
