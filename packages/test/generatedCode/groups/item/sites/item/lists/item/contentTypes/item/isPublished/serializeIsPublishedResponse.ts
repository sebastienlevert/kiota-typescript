import {IsPublishedResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsPublishedResponse(writer: SerializationWriter, isPublishedResponse: IsPublishedResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", isPublishedResponse.value);
}
