import {AppRoleCollectionResponse} from './index';
import {serializeAppRole} from './serializeAppRole';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppRoleCollectionResponse(writer: SerializationWriter, appRoleCollectionResponse: AppRoleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appRoleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appRoleCollectionResponse.value as any, serializeAppRole);
}
