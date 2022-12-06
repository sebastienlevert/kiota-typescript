import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AuthenticationMethodTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodTarget(authenticationMethodTarget: AuthenticationMethodTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethodTarget),
        "isRegistrationRequired": n => { authenticationMethodTarget.isRegistrationRequired = n.getBooleanValue() as any ; },
        "targetType": n => { authenticationMethodTarget.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType) as any ; },
    }
}
