import {serializeSite} from '../../../../models/serializeSite';
import {AddPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("value", addPostRequestBody.value as any, serializeSite);
}
