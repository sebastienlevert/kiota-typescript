import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {ConnectionState} from './connectionState';
import {deserializeIntoConfiguration} from './deserializeIntoConfiguration';
import {deserializeIntoConnectionOperation} from './deserializeIntoConnectionOperation';
import {deserializeIntoExternalGroup} from './deserializeIntoExternalGroup';
import {deserializeIntoExternalItem} from './deserializeIntoExternalItem';
import {deserializeIntoSchema} from './deserializeIntoSchema';
import {ExternalConnection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalConnection(externalConnection: ExternalConnection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalConnection),
        "configuration": n => { externalConnection.configuration = n.getObject(deserializeIntoConfiguration) as any ; },
        "description": n => { externalConnection.description = n.getStringValue() as any ; },
        "groups": n => { externalConnection.groups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExternalGroup) as any ; },
        "items": n => { externalConnection.items = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExternalItem) as any ; },
        "name": n => { externalConnection.name = n.getStringValue() as any ; },
        "operations": n => { externalConnection.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConnectionOperation) as any ; },
        "schema": n => { externalConnection.schema = n.getObject(deserializeIntoSchema) as any ; },
        "state": n => { externalConnection.state = n.getEnumValue<ConnectionState>(ConnectionState) as any ; },
    }
}
