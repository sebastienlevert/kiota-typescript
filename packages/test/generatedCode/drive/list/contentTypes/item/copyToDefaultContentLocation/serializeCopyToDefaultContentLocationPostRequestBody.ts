import {serializeItemReference} from '../../../../../models/serializeItemReference';
import {CopyToDefaultContentLocationPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyToDefaultContentLocationPostRequestBody(writer: SerializationWriter, copyToDefaultContentLocationPostRequestBody: CopyToDefaultContentLocationPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("destinationFileName", copyToDefaultContentLocationPostRequestBody.destinationFileName);
            writer.writeObjectValueFromMethod("sourceFile", copyToDefaultContentLocationPostRequestBody.sourceFile as any, serializeItemReference);
}
