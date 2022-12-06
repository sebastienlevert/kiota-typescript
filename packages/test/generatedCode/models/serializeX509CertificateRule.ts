import {X509CertificateRule} from './index';
import {X509CertificateAuthenticationMode} from './x509CertificateAuthenticationMode';
import {X509CertificateRuleType} from './x509CertificateRuleType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeX509CertificateRule(writer: SerializationWriter, x509CertificateRule: X509CertificateRule | undefined = {}) : void {
            writer.writeStringValue("identifier", x509CertificateRule.identifier);
            writer.writeStringValue("@odata.type", x509CertificateRule.odataType);
            writer.writeEnumValue<X509CertificateAuthenticationMode>("x509CertificateAuthenticationMode", x509CertificateRule.x509CertificateAuthenticationMode);
            writer.writeEnumValue<X509CertificateRuleType>("x509CertificateRuleType", x509CertificateRule.x509CertificateRuleType);
}
