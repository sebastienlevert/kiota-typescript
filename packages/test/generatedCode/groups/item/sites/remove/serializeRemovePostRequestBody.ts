import {serializeSite} from '../../../../models/serializeSite';
import {RemovePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemovePostRequestBody(writer: SerializationWriter, removePostRequestBody: RemovePostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("value", removePostRequestBody.value as any, serializeSite);
}
