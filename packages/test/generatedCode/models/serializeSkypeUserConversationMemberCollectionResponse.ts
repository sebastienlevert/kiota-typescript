import {SkypeUserConversationMemberCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSkypeUserConversationMember} from './serializeSkypeUserConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkypeUserConversationMemberCollectionResponse(writer: SerializationWriter, skypeUserConversationMemberCollectionResponse: SkypeUserConversationMemberCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, skypeUserConversationMemberCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", skypeUserConversationMemberCollectionResponse.value as any, serializeSkypeUserConversationMember);
}
