import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse(verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse.value = n.getBooleanValue() as any ; },
    }
}
