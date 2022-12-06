import {AccessType} from './accessType';
import {AclType} from './aclType';
import {Acl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcl(writer: SerializationWriter, acl: Acl | undefined = {}) : void {
            writer.writeEnumValue<AccessType>("accessType", acl.accessType);
            writer.writeStringValue("@odata.type", acl.odataType);
            writer.writeEnumValue<AclType>("type", acl.type);
            writer.writeStringValue("value", acl.value);
}
