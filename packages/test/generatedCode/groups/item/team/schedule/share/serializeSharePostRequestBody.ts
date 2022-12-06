import {SharePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharePostRequestBody(writer: SerializationWriter, sharePostRequestBody: SharePostRequestBody | undefined = {}) : void {
            writer.writeDateValue("endDateTime", sharePostRequestBody.endDateTime);
            writer.writeBooleanValue("notifyTeam", sharePostRequestBody.notifyTeam);
            writer.writeDateValue("startDateTime", sharePostRequestBody.startDateTime);
}
