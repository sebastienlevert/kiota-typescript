import {deserializeIntoApiAuthenticationConfigurationBase} from './deserializeIntoApiAuthenticationConfigurationBase';
import {Pkcs12Certificate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPkcs12Certificate(pkcs12Certificate: Pkcs12Certificate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiAuthenticationConfigurationBase(pkcs12Certificate),
        "password": n => { pkcs12Certificate.password = n.getStringValue() as any ; },
        "pkcs12Value": n => { pkcs12Certificate.pkcs12Value = n.getStringValue() as any ; },
    }
}
