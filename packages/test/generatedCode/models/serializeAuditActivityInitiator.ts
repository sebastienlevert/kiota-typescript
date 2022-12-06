import {AuditActivityInitiator} from './index';
import {serializeAppIdentity} from './serializeAppIdentity';
import {serializeUserIdentity} from './serializeUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditActivityInitiator(writer: SerializationWriter, auditActivityInitiator: AuditActivityInitiator | undefined = {}) : void {
            writer.writeObjectValueFromMethod("app", auditActivityInitiator.app as any, serializeAppIdentity);
            writer.writeStringValue("@odata.type", auditActivityInitiator.odataType);
            writer.writeObjectValueFromMethod("user", auditActivityInitiator.user as any, serializeUserIdentity);
}
