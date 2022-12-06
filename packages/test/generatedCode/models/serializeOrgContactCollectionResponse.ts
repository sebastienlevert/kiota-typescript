import {OrgContactCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOrgContact} from './serializeOrgContact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrgContactCollectionResponse(writer: SerializationWriter, orgContactCollectionResponse: OrgContactCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, orgContactCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", orgContactCollectionResponse.value as any, serializeOrgContact);
}
