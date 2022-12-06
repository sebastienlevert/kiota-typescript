import {RemoveGroupPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveGroupPostRequestBody(writer: SerializationWriter, removeGroupPostRequestBody: RemoveGroupPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("groupId", removeGroupPostRequestBody.groupId);
}
