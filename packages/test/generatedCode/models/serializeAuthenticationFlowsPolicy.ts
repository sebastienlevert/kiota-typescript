import {AuthenticationFlowsPolicy} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeSelfServiceSignUpAuthenticationFlowConfiguration} from './serializeSelfServiceSignUpAuthenticationFlowConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationFlowsPolicy(writer: SerializationWriter, authenticationFlowsPolicy: AuthenticationFlowsPolicy | undefined = {}) : void {
        serializeEntity(writer, authenticationFlowsPolicy)
            writer.writeStringValue("description", authenticationFlowsPolicy.description);
            writer.writeStringValue("displayName", authenticationFlowsPolicy.displayName);
            writer.writeObjectValueFromMethod("selfServiceSignUp", authenticationFlowsPolicy.selfServiceSignUp as any, serializeSelfServiceSignUpAuthenticationFlowConfiguration);
}
