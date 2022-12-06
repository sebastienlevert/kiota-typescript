import {AccessAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessAction(writer: SerializationWriter, accessAction: AccessAction | undefined = {}) : void {
            writer.writeStringValue("@odata.type", accessAction.odataType);
}
