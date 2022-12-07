import {PersonDataSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonDataSource(writer: SerializationWriter, personDataSource: PersonDataSource | undefined = {}) : void {
            writer.writeStringValue("type", personDataSource.type);
}
