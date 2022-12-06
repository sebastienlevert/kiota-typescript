import {ConfirmCompromisedPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfirmCompromisedPostRequestBody(writer: SerializationWriter, confirmCompromisedPostRequestBody: ConfirmCompromisedPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("userIds", confirmCompromisedPostRequestBody.userIds);
}
