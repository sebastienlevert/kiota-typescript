import {serializeEntity} from '../serializeEntity';
import {IdentityType} from './identityType';
import {Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentity(writer: SerializationWriter, identity: Identity | undefined = {}) : void {
        serializeEntity(writer, identity)
            writer.writeEnumValue<IdentityType>("type", identity.type);
}
