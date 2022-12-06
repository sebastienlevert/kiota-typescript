import {deserializeIntoUserAgent} from './deserializeIntoUserAgent';
import {ServiceUserAgent} from './index';
import {ServiceRole} from './serviceRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceUserAgent(serviceUserAgent: ServiceUserAgent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUserAgent(serviceUserAgent),
        "role": n => { serviceUserAgent.role = n.getEnumValue<ServiceRole>(ServiceRole) as any ; },
    }
}
