import {PersonDataSources} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonDataSources(personDataSources: PersonDataSources | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "type": n => { personDataSources.type = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
