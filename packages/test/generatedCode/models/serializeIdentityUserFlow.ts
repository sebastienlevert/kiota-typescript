import {IdentityUserFlow} from './index';
import {serializeEntity} from './serializeEntity';
import {UserFlowType} from './userFlowType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlow(writer: SerializationWriter, identityUserFlow: IdentityUserFlow | undefined = {}) : void {
        serializeEntity(writer, identityUserFlow)
            writer.writeEnumValue<UserFlowType>("userFlowType", identityUserFlow.userFlowType);
            writer.writeNumberValue("userFlowTypeVersion", identityUserFlow.userFlowTypeVersion);
}
