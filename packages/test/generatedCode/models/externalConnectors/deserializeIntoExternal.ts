import {deserializeIntoExternalConnection} from './deserializeIntoExternalConnection';
import {External} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternal(external: External | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "connections": n => { external.connections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExternalConnection) as any ; },
        "@odata.type": n => { external.odataType = n.getStringValue() as any ; },
    }
}
