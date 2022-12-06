import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditActor extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the Application. */
    applicationDisplayName?: string;
    /** AAD Application Id. */
    applicationId?: string;
    /** Actor Type. */
    auditActorType?: string;
    /** IPAddress. */
    ipAddress?: string;
    /** The OdataType property */
    odataType?: string;
    /** Service Principal Name (SPN). */
    servicePrincipalName?: string;
    /** User Id. */
    userId?: string;
    /** List of user permissions when the audit was performed. */
    userPermissions?: string[];
    /** User Principal Name (UPN). */
    userPrincipalName?: string;
}
