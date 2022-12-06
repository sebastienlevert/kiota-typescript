import {serializeTeamworkUserIdentity} from '../../../../models/serializeTeamworkUserIdentity';
import {MarkChatReadForUserPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkChatReadForUserPostRequestBody(writer: SerializationWriter, markChatReadForUserPostRequestBody: MarkChatReadForUserPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("user", markChatReadForUserPostRequestBody.user as any, serializeTeamworkUserIdentity);
}
