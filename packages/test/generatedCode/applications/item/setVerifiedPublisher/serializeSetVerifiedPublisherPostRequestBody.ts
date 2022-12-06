import {SetVerifiedPublisherPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetVerifiedPublisherPostRequestBody(writer: SerializationWriter, setVerifiedPublisherPostRequestBody: SetVerifiedPublisherPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("verifiedPublisherId", setVerifiedPublisherPostRequestBody.verifiedPublisherId);
}
