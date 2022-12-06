import {UserAgent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserAgent(writer: SerializationWriter, userAgent: UserAgent | undefined = {}) : void {
            writer.writeStringValue("applicationVersion", userAgent.applicationVersion);
            writer.writeStringValue("headerValue", userAgent.headerValue);
            writer.writeStringValue("@odata.type", userAgent.odataType);
}
