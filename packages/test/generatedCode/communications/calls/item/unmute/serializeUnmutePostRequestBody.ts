import {UnmutePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnmutePostRequestBody(writer: SerializationWriter, unmutePostRequestBody: UnmutePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("clientContext", unmutePostRequestBody.clientContext);
}
