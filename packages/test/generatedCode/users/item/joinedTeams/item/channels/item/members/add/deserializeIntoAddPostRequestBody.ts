import {deserializeIntoConversationMember} from '../../../../../../../../models/deserializeIntoConversationMember';
import {AddPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { addPostRequestBody.values = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationMember) as any ; },
    }
}
