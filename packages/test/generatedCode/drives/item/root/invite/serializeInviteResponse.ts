import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializePermission} from '../../../../models/serializePermission';
import {InviteResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInviteResponse(writer: SerializationWriter, inviteResponse: InviteResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, inviteResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", inviteResponse.value as any, serializePermission);
}
