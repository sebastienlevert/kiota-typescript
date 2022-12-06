import {IdentityBuiltInUserFlowAttributeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityBuiltInUserFlowAttribute} from './serializeIdentityBuiltInUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityBuiltInUserFlowAttributeCollectionResponse(writer: SerializationWriter, identityBuiltInUserFlowAttributeCollectionResponse: IdentityBuiltInUserFlowAttributeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityBuiltInUserFlowAttributeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identityBuiltInUserFlowAttributeCollectionResponse.value as any, serializeIdentityBuiltInUserFlowAttribute);
}
