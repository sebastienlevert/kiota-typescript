import {SpecialFolder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSpecialFolder(writer: SerializationWriter, specialFolder: SpecialFolder | undefined = {}) : void {
            writer.writeStringValue("name", specialFolder.name);
}
