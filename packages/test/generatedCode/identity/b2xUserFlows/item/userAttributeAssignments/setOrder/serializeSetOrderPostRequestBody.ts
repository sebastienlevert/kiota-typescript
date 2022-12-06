import {serializeAssignmentOrder} from '../../../../../models/serializeAssignmentOrder';
import {SetOrderPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetOrderPostRequestBody(writer: SerializationWriter, setOrderPostRequestBody: SetOrderPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("newAssignmentOrder", setOrderPostRequestBody.newAssignmentOrder as any, serializeAssignmentOrder);
}
