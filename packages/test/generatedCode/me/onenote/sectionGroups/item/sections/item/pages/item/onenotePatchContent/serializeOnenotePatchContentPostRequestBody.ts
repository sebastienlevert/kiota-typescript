import {serializeOnenotePatchContentCommand} from '../../../../../../../../../models/serializeOnenotePatchContentCommand';
import {OnenotePatchContentPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePatchContentPostRequestBody(writer: SerializationWriter, onenotePatchContentPostRequestBody: OnenotePatchContentPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("commands", onenotePatchContentPostRequestBody.commands as any, serializeOnenotePatchContentCommand);
}
