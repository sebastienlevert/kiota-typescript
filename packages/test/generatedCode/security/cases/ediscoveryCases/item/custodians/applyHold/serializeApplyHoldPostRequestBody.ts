import {ApplyHoldPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyHoldPostRequestBody(writer: SerializationWriter, applyHoldPostRequestBody: ApplyHoldPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("ids", applyHoldPostRequestBody.ids);
}
