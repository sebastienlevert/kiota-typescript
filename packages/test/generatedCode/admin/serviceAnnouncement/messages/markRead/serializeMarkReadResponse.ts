import {MarkReadResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkReadResponse(writer: SerializationWriter, markReadResponse: MarkReadResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", markReadResponse.value);
}
