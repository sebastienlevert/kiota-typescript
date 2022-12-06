import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PreAuthorizedApplication extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The unique identifier for the application. */
    appId?: string;
    /** The unique identifier for the oauth2PermissionScopes the application requires. */
    delegatedPermissionIds?: string[];
    /** The OdataType property */
    odataType?: string;
}
