import {PersonDataSources} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonDataSources(writer: SerializationWriter, personDataSources: PersonDataSources | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("type", personDataSources.type);
}
