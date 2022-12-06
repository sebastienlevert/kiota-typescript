import {GetByIdsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetByIdsPostRequestBody(writer: SerializationWriter, getByIdsPostRequestBody: GetByIdsPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("ids", getByIdsPostRequestBody.ids);
            writer.writeCollectionOfPrimitiveValues<string>("types", getByIdsPostRequestBody.types);
}
