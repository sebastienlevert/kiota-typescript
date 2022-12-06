import {CheckMemberGroupsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberGroupsPostRequestBody(writer: SerializationWriter, checkMemberGroupsPostRequestBody: CheckMemberGroupsPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("groupIds", checkMemberGroupsPostRequestBody.groupIds);
}
