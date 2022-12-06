import {TeamworkUserIdentityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkUserIdentityCollectionResponse(writer: SerializationWriter, teamworkUserIdentityCollectionResponse: TeamworkUserIdentityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamworkUserIdentityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", teamworkUserIdentityCollectionResponse.value as any, serializeTeamworkUserIdentity);
}
