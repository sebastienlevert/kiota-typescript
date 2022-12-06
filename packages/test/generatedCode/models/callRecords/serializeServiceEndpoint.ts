import {ServiceEndpoint} from './index';
import {serializeEndpoint} from './serializeEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceEndpoint(writer: SerializationWriter, serviceEndpoint: ServiceEndpoint | undefined = {}) : void {
        serializeEndpoint(writer, serviceEndpoint)
}
