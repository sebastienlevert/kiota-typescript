import {deserializeIntoAppIdentity} from './deserializeIntoAppIdentity';
import {deserializeIntoUserIdentity} from './deserializeIntoUserIdentity';
import {AuditActivityInitiator} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditActivityInitiator(auditActivityInitiator: AuditActivityInitiator | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "app": n => { auditActivityInitiator.app = n.getObject(deserializeIntoAppIdentity) as any ; },
        "@odata.type": n => { auditActivityInitiator.odataType = n.getStringValue() as any ; },
        "user": n => { auditActivityInitiator.user = n.getObject(deserializeIntoUserIdentity) as any ; },
    }
}
