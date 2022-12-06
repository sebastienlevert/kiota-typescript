import {AuditProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditProperty(auditProperty: AuditProperty | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { auditProperty.displayName = n.getStringValue() as any ; },
        "newValue": n => { auditProperty.newValue = n.getStringValue() as any ; },
        "@odata.type": n => { auditProperty.odataType = n.getStringValue() as any ; },
        "oldValue": n => { auditProperty.oldValue = n.getStringValue() as any ; },
    }
}
