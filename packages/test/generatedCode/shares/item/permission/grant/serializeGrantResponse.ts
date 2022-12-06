import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializePermission} from '../../../../models/serializePermission';
import {GrantResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGrantResponse(writer: SerializationWriter, grantResponse: GrantResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, grantResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", grantResponse.value as any, serializePermission);
}
