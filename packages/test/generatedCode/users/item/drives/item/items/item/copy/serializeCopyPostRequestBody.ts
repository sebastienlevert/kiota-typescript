import {serializeItemReference} from '../../../../../../../models/serializeItemReference';
import {CopyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyPostRequestBody(writer: SerializationWriter, copyPostRequestBody: CopyPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("name", copyPostRequestBody.name);
            writer.writeObjectValueFromMethod("parentReference", copyPostRequestBody.parentReference as any, serializeItemReference);
}
