import {ForceDeletePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeForceDeletePostRequestBody(writer: SerializationWriter, forceDeletePostRequestBody: ForceDeletePostRequestBody | undefined = {}) : void {
            writer.writeBooleanValue("disableUserAccounts", forceDeletePostRequestBody.disableUserAccounts);
}
