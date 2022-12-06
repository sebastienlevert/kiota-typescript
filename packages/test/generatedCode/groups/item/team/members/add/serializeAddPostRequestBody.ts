import {serializeConversationMember} from '../../../../../models/serializeConversationMember';
import {AddPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("values", addPostRequestBody.values as any, serializeConversationMember);
}
