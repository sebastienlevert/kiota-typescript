import {deserializeIntoDirectoryAudit} from './deserializeIntoDirectoryAudit';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoProvisioningObjectSummary} from './deserializeIntoProvisioningObjectSummary';
import {deserializeIntoSignIn} from './deserializeIntoSignIn';
import {AuditLogRoot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditLogRoot(auditLogRoot: AuditLogRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(auditLogRoot),
        "directoryAudits": n => { auditLogRoot.directoryAudits = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryAudit) as any ; },
        "provisioning": n => { auditLogRoot.provisioning = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProvisioningObjectSummary) as any ; },
        "signIns": n => { auditLogRoot.signIns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSignIn) as any ; },
    }
}
