import {PersonOrGroupColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonOrGroupColumn(writer: SerializationWriter, personOrGroupColumn: PersonOrGroupColumn | undefined = {}) : void {
            writer.writeBooleanValue("allowMultipleSelection", personOrGroupColumn.allowMultipleSelection);
            writer.writeStringValue("chooseFromType", personOrGroupColumn.chooseFromType);
            writer.writeStringValue("displayAs", personOrGroupColumn.displayAs);
}
