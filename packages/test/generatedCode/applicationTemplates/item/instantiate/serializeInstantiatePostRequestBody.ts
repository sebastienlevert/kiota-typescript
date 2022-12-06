import {InstantiatePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInstantiatePostRequestBody(writer: SerializationWriter, instantiatePostRequestBody: InstantiatePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("displayName", instantiatePostRequestBody.displayName);
}
