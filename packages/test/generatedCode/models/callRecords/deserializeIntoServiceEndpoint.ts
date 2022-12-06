import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {ServiceEndpoint} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceEndpoint(serviceEndpoint: ServiceEndpoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEndpoint(serviceEndpoint),
    }
}
