import {MarkUnreadResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkUnreadResponse(writer: SerializationWriter, markUnreadResponse: MarkUnreadResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", markUnreadResponse.value);
}
