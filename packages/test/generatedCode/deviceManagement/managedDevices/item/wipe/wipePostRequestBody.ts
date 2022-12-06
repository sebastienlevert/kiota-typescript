import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WipePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The keepEnrollmentData property */
    keepEnrollmentData?: boolean;
    /** The keepUserData property */
    keepUserData?: boolean;
    /** The macOsUnlockCode property */
    macOsUnlockCode?: string;
    /** The persistEsimDataPlan property */
    persistEsimDataPlan?: boolean;
}
