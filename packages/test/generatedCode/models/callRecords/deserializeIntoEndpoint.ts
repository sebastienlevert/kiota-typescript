import {deserializeIntoUserAgent} from './deserializeIntoUserAgent';
import {Endpoint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEndpoint(endpoint: Endpoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { endpoint.odataType = n.getStringValue() as any ; },
        "userAgent": n => { endpoint.userAgent = n.getObject(deserializeIntoUserAgent) as any ; },
    }
}
