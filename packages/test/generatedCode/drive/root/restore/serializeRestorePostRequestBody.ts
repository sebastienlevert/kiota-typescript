import {serializeItemReference} from '../../../models/serializeItemReference';
import {RestorePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRestorePostRequestBody(writer: SerializationWriter, restorePostRequestBody: RestorePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("name", restorePostRequestBody.name);
            writer.writeObjectValueFromMethod("parentReference", restorePostRequestBody.parentReference as any, serializeItemReference);
}
