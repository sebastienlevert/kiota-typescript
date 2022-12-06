import {serializeMobileAppAssignment} from '../../../../models/serializeMobileAppAssignment';
import {AssignPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("mobileAppAssignments", assignPostRequestBody.mobileAppAssignments as any, serializeMobileAppAssignment);
}
