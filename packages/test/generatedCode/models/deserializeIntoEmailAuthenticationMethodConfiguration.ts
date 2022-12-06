import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import {ExternalEmailOtpState} from './externalEmailOtpState';
import {EmailAuthenticationMethodConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAuthenticationMethodConfiguration(emailAuthenticationMethodConfiguration: EmailAuthenticationMethodConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(emailAuthenticationMethodConfiguration),
        "allowExternalIdToUseEmailOtp": n => { emailAuthenticationMethodConfiguration.allowExternalIdToUseEmailOtp = n.getEnumValue<ExternalEmailOtpState>(ExternalEmailOtpState) as any ; },
        "includeTargets": n => { emailAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuthenticationMethodTarget) as any ; },
    }
}
