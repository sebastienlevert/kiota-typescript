import {GetPresencesByUserIdPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPresencesByUserIdPostRequestBody(writer: SerializationWriter, getPresencesByUserIdPostRequestBody: GetPresencesByUserIdPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("ids", getPresencesByUserIdPostRequestBody.ids);
}
