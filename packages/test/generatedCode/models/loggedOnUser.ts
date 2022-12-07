import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LoggedOnUser extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Date time when user logs on */
    lastLogOnDateTime?: Date;
    /** User id */
    userId?: string;
}
