import {ExternalEmailOtpState} from './externalEmailOtpState';
import {EmailAuthenticationMethodConfiguration} from './index';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethodConfiguration(writer: SerializationWriter, emailAuthenticationMethodConfiguration: EmailAuthenticationMethodConfiguration | undefined = {}) : void {
        serializeAuthenticationMethodConfiguration(writer, emailAuthenticationMethodConfiguration)
            writer.writeEnumValue<ExternalEmailOtpState>("allowExternalIdToUseEmailOtp", emailAuthenticationMethodConfiguration.allowExternalIdToUseEmailOtp);
            writer.writeCollectionOfObjectValuesFromMethod("includeTargets", emailAuthenticationMethodConfiguration.includeTargets as any, serializeAuthenticationMethodTarget);
}
