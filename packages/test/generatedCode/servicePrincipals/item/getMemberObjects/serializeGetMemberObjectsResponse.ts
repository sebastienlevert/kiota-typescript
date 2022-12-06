import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetMemberObjectsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberObjectsResponse(writer: SerializationWriter, getMemberObjectsResponse: GetMemberObjectsResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getMemberObjectsResponse)
            writer.writeCollectionOfPrimitiveValues<string>("value", getMemberObjectsResponse.value);
}
