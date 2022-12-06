import {SkypeForBusinessUserConversationMemberCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSkypeForBusinessUserConversationMember} from './serializeSkypeForBusinessUserConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkypeForBusinessUserConversationMemberCollectionResponse(writer: SerializationWriter, skypeForBusinessUserConversationMemberCollectionResponse: SkypeForBusinessUserConversationMemberCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, skypeForBusinessUserConversationMemberCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", skypeForBusinessUserConversationMemberCollectionResponse.value as any, serializeSkypeForBusinessUserConversationMember);
}
