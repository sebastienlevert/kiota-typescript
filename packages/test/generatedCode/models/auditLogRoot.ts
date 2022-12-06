import {DirectoryAudit, Entity, ProvisioningObjectSummary, SignIn} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuditLogRoot extends Entity, Partial<Parsable> {
    /** The directoryAudits property */
    directoryAudits?: DirectoryAudit[];
    /** The provisioning property */
    provisioning?: ProvisioningObjectSummary[];
    /** The signIns property */
    signIns?: SignIn[];
}
