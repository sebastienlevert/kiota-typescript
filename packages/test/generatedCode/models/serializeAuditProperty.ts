import {AuditProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditProperty(writer: SerializationWriter, auditProperty: AuditProperty | undefined = {}) : void {
            writer.writeStringValue("displayName", auditProperty.displayName);
            writer.writeStringValue("newValue", auditProperty.newValue);
            writer.writeStringValue("@odata.type", auditProperty.odataType);
            writer.writeStringValue("oldValue", auditProperty.oldValue);
}
