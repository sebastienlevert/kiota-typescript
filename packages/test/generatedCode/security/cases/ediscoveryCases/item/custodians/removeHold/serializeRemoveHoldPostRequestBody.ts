import {RemoveHoldPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveHoldPostRequestBody(writer: SerializationWriter, removeHoldPostRequestBody: RemoveHoldPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("ids", removeHoldPostRequestBody.ids);
}
