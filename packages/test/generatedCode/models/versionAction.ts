import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VersionAction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the new version that was created by this action. */
    newVersion?: string;
}
