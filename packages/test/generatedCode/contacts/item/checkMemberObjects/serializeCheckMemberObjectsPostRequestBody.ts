import {CheckMemberObjectsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberObjectsPostRequestBody(writer: SerializationWriter, checkMemberObjectsPostRequestBody: CheckMemberObjectsPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("ids", checkMemberObjectsPostRequestBody.ids);
}
