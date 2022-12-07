import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthorizationInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The collection of unique identifiers that can be associated with a user and can be used to bind the Azure AD user to a certificate for authentication and authorization into non-Azure AD environments. The identifiers must be unique in the tenant. */
    certificateUserIds?: string[];
}
