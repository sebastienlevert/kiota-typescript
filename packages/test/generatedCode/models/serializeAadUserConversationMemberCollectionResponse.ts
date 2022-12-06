import {AadUserConversationMemberCollectionResponse} from './index';
import {serializeAadUserConversationMember} from './serializeAadUserConversationMember';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAadUserConversationMemberCollectionResponse(writer: SerializationWriter, aadUserConversationMemberCollectionResponse: AadUserConversationMemberCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, aadUserConversationMemberCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", aadUserConversationMemberCollectionResponse.value as any, serializeAadUserConversationMember);
}
