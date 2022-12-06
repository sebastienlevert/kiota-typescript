import {RemoveGroupResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveGroupResponse(writer: SerializationWriter, removeGroupResponse: RemoveGroupResponse | undefined = {}) : void {
            writer.writeBooleanValue("value", removeGroupResponse.value);
}
