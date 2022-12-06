import {AuditActor, AuditResource, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuditEvent extends Entity, Partial<Parsable> {
    /** Friendly name of the activity. */
    activity?: string;
    /** The date time in UTC when the activity was performed. */
    activityDateTime?: Date;
    /** The HTTP operation type of the activity. */
    activityOperationType?: string;
    /** The result of the activity. */
    activityResult?: string;
    /** The type of activity that was being performed. */
    activityType?: string;
    /** AAD user and application that are associated with the audit event. */
    actor?: AuditActor;
    /** Audit category. */
    category?: string;
    /** Component name. */
    componentName?: string;
    /** The client request Id that is used to correlate activity within the system. */
    correlationId?: string;
    /** Event display name. */
    displayName?: string;
    /** Resources being modified. */
    resources?: AuditResource[];
}
