import {AssociatedTeamInfoCollectionResponse} from './index';
import {serializeAssociatedTeamInfo} from './serializeAssociatedTeamInfo';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssociatedTeamInfoCollectionResponse(writer: SerializationWriter, associatedTeamInfoCollectionResponse: AssociatedTeamInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, associatedTeamInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", associatedTeamInfoCollectionResponse.value as any, serializeAssociatedTeamInfo);
}
