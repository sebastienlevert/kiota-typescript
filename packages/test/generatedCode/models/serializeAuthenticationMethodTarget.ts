import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AuthenticationMethodTarget} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodTarget(writer: SerializationWriter, authenticationMethodTarget: AuthenticationMethodTarget | undefined = {}) : void {
        serializeEntity(writer, authenticationMethodTarget)
            writer.writeBooleanValue("isRegistrationRequired", authenticationMethodTarget.isRegistrationRequired);
            writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", authenticationMethodTarget.targetType);
}
