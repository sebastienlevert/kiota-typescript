import {Endpoint} from './index';
import {serializeUserAgent} from './serializeUserAgent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEndpoint(writer: SerializationWriter, endpoint: Endpoint | undefined = {}) : void {
            writer.writeStringValue("@odata.type", endpoint.odataType);
            writer.writeObjectValueFromMethod("userAgent", endpoint.userAgent as any, serializeUserAgent);
}
