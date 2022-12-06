import {AccessType} from './accessType';
import {AclType} from './aclType';
import {Acl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAcl(acl: Acl | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "accessType": n => { acl.accessType = n.getEnumValue<AccessType>(AccessType) as any ; },
        "@odata.type": n => { acl.odataType = n.getStringValue() as any ; },
        "type": n => { acl.type = n.getEnumValue<AclType>(AclType) as any ; },
        "value": n => { acl.value = n.getStringValue() as any ; },
    }
}
