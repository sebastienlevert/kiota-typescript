import {DismissPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDismissPostRequestBody(writer: SerializationWriter, dismissPostRequestBody: DismissPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("userIds", dismissPostRequestBody.userIds);
}
