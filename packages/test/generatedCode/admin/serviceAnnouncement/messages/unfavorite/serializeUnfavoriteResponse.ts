import {UnfavoriteResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnfavoriteResponse(writer: SerializationWriter, unfavoriteResponse: UnfavoriteResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", unfavoriteResponse.value);
}
