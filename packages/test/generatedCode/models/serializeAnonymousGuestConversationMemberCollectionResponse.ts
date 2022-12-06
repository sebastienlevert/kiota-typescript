import {AnonymousGuestConversationMemberCollectionResponse} from './index';
import {serializeAnonymousGuestConversationMember} from './serializeAnonymousGuestConversationMember';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAnonymousGuestConversationMemberCollectionResponse(writer: SerializationWriter, anonymousGuestConversationMemberCollectionResponse: AnonymousGuestConversationMemberCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, anonymousGuestConversationMemberCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", anonymousGuestConversationMemberCollectionResponse.value as any, serializeAnonymousGuestConversationMember);
}
