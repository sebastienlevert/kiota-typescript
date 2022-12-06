import {IosVppEBookAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosVppEBookAssignment} from './serializeIosVppEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppEBookAssignmentCollectionResponse(writer: SerializationWriter, iosVppEBookAssignmentCollectionResponse: IosVppEBookAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosVppEBookAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosVppEBookAssignmentCollectionResponse.value as any, serializeIosVppEBookAssignment);
}
