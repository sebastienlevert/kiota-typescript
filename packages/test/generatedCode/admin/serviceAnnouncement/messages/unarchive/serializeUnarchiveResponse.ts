import {UnarchiveResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnarchiveResponse(writer: SerializationWriter, unarchiveResponse: UnarchiveResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", unarchiveResponse.value);
}
