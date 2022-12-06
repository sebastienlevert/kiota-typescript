import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ServicePrincipalIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipalIdentity(servicePrincipalIdentity: ServicePrincipalIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(servicePrincipalIdentity),
        "appId": n => { servicePrincipalIdentity.appId = n.getStringValue() as any ; },
    }
}
