import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {CheckMemberGroupsResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberGroupsResponse(writer: SerializationWriter, checkMemberGroupsResponse: CheckMemberGroupsResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checkMemberGroupsResponse)
            writer.writeCollectionOfPrimitiveValues<string>("value", checkMemberGroupsResponse.value);
}
