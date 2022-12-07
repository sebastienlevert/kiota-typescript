import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {Endpoint} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEndpoint(endpoint: Endpoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(endpoint),
        "capability": n => { endpoint.capability = n.getStringValue() as any ; },
        "providerId": n => { endpoint.providerId = n.getStringValue() as any ; },
        "providerName": n => { endpoint.providerName = n.getStringValue() as any ; },
        "providerResourceId": n => { endpoint.providerResourceId = n.getStringValue() as any ; },
        "uri": n => { endpoint.uri = n.getStringValue() as any ; },
    }
}
