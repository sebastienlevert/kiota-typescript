import {IdentitySecurityDefaultsEnforcementPolicy} from './index';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentitySecurityDefaultsEnforcementPolicy(writer: SerializationWriter, identitySecurityDefaultsEnforcementPolicy: IdentitySecurityDefaultsEnforcementPolicy | undefined = {}) : void {
        serializePolicyBase(writer, identitySecurityDefaultsEnforcementPolicy)
            writer.writeBooleanValue("isEnabled", identitySecurityDefaultsEnforcementPolicy.isEnabled);
}
