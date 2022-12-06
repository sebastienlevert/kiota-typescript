import {deserializeIntoApiAuthenticationConfigurationBase} from './deserializeIntoApiAuthenticationConfigurationBase';
import {BasicAuthentication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBasicAuthentication(basicAuthentication: BasicAuthentication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiAuthenticationConfigurationBase(basicAuthentication),
        "password": n => { basicAuthentication.password = n.getStringValue() as any ; },
        "username": n => { basicAuthentication.username = n.getStringValue() as any ; },
    }
}
