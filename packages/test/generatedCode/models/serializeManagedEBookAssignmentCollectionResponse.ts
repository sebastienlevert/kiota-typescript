import {ManagedEBookAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedEBookAssignmentCollectionResponse(writer: SerializationWriter, managedEBookAssignmentCollectionResponse: ManagedEBookAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedEBookAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedEBookAssignmentCollectionResponse.value as any, serializeManagedEBookAssignment);
}
