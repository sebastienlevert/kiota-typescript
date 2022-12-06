import {AuditLogRoot} from './index';
import {serializeDirectoryAudit} from './serializeDirectoryAudit';
import {serializeEntity} from './serializeEntity';
import {serializeProvisioningObjectSummary} from './serializeProvisioningObjectSummary';
import {serializeSignIn} from './serializeSignIn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditLogRoot(writer: SerializationWriter, auditLogRoot: AuditLogRoot | undefined = {}) : void {
        serializeEntity(writer, auditLogRoot)
            writer.writeCollectionOfObjectValuesFromMethod("directoryAudits", auditLogRoot.directoryAudits as any, serializeDirectoryAudit);
            writer.writeCollectionOfObjectValuesFromMethod("provisioning", auditLogRoot.provisioning as any, serializeProvisioningObjectSummary);
            writer.writeCollectionOfObjectValuesFromMethod("signIns", auditLogRoot.signIns as any, serializeSignIn);
}
