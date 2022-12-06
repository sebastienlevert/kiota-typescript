import {serializeTeamworkUserIdentity} from '../../../models/serializeTeamworkUserIdentity';
import {MarkChatUnreadForUserPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkChatUnreadForUserPostRequestBody(writer: SerializationWriter, markChatUnreadForUserPostRequestBody: MarkChatUnreadForUserPostRequestBody | undefined = {}) : void {
            writer.writeDateValue("lastMessageReadDateTime", markChatUnreadForUserPostRequestBody.lastMessageReadDateTime);
            writer.writeObjectValueFromMethod("user", markChatUnreadForUserPostRequestBody.user as any, serializeTeamworkUserIdentity);
}
