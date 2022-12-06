import {IdentityUserFlowAttributeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttributeCollectionResponse(writer: SerializationWriter, identityUserFlowAttributeCollectionResponse: IdentityUserFlowAttributeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityUserFlowAttributeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identityUserFlowAttributeCollectionResponse.value as any, serializeIdentityUserFlowAttribute);
}
