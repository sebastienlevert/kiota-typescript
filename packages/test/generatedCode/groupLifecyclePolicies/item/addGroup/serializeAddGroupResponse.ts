import {AddGroupResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddGroupResponse(writer: SerializationWriter, addGroupResponse: AddGroupResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", addGroupResponse.value);
}
