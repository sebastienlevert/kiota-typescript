import {serializeSearchRequest} from '../../models/serializeSearchRequest';
import {QueryPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQueryPostRequestBody(writer: SerializationWriter, queryPostRequestBody: QueryPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("requests", queryPostRequestBody.requests as any, serializeSearchRequest);
}
