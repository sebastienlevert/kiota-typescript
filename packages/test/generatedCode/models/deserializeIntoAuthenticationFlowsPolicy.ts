import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration} from './deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration';
import {AuthenticationFlowsPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationFlowsPolicy(authenticationFlowsPolicy: AuthenticationFlowsPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationFlowsPolicy),
        "description": n => { authenticationFlowsPolicy.description = n.getStringValue() as any ; },
        "displayName": n => { authenticationFlowsPolicy.displayName = n.getStringValue() as any ; },
        "selfServiceSignUp": n => { authenticationFlowsPolicy.selfServiceSignUp = n.getObject(deserializeIntoSelfServiceSignUpAuthenticationFlowConfiguration) as any ; },
    }
}
