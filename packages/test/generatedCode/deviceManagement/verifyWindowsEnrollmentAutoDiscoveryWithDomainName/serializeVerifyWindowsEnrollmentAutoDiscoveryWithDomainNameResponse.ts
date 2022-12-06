import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse(writer: SerializationWriter, verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse.value);
}
