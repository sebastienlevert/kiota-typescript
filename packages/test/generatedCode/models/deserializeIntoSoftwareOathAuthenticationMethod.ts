import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {SoftwareOathAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSoftwareOathAuthenticationMethod(softwareOathAuthenticationMethod: SoftwareOathAuthenticationMethod | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(softwareOathAuthenticationMethod),
        "secretKey": n => { softwareOathAuthenticationMethod.secretKey = n.getStringValue() as any ; },
    }
}
