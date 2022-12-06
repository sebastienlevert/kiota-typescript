import {AddGroupPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddGroupPostRequestBody(writer: SerializationWriter, addGroupPostRequestBody: AddGroupPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("groupId", addGroupPostRequestBody.groupId);
}
