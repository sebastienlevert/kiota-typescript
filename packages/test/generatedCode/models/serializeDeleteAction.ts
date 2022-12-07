import {DeleteAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeleteAction(writer: SerializationWriter, deleteAction: DeleteAction | undefined = {}) : void {
            writer.writeStringValue("name", deleteAction.name);
            writer.writeStringValue("objectType", deleteAction.objectType);
}
