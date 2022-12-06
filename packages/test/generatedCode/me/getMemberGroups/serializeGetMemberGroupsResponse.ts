import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {GetMemberGroupsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMemberGroupsResponse(writer: SerializationWriter, getMemberGroupsResponse: GetMemberGroupsResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getMemberGroupsResponse)
            writer.writeCollectionOfPrimitiveValues<string>("value", getMemberGroupsResponse.value);
}
