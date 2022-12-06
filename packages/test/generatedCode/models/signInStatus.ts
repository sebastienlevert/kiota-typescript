import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SignInStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Provides additional details on the sign-in activity */
    additionalDetails?: string;
    /** Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages. */
    errorCode?: number;
    /** Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages. */
    failureReason?: string;
    /** The OdataType property */
    odataType?: string;
}
