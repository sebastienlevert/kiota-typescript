import {MobileAppAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileAppAssignment} from './serializeMobileAppAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppAssignmentCollectionResponse(writer: SerializationWriter, mobileAppAssignmentCollectionResponse: MobileAppAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mobileAppAssignmentCollectionResponse.value as any, serializeMobileAppAssignment);
}
