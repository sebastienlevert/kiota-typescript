import {AuditProperty} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditResource extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Audit resource's type. */
    auditResourceType?: string;
    /** Display name. */
    displayName?: string;
    /** List of modified properties. */
    modifiedProperties?: AuditProperty[];
    /** The OdataType property */
    odataType?: string;
    /** Audit resource's Id. */
    resourceId?: string;
}
