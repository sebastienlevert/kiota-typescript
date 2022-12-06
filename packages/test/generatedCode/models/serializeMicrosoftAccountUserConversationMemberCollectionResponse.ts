import {MicrosoftAccountUserConversationMemberCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMicrosoftAccountUserConversationMember} from './serializeMicrosoftAccountUserConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAccountUserConversationMemberCollectionResponse(writer: SerializationWriter, microsoftAccountUserConversationMemberCollectionResponse: MicrosoftAccountUserConversationMemberCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, microsoftAccountUserConversationMemberCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", microsoftAccountUserConversationMemberCollectionResponse.value as any, serializeMicrosoftAccountUserConversationMember);
}
