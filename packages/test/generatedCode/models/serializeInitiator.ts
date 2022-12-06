import {Initiator} from './index';
import {InitiatorType} from './initiatorType';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInitiator(writer: SerializationWriter, initiator: Initiator | undefined = {}) : void {
        serializeIdentity(writer, initiator)
            writer.writeEnumValue<InitiatorType>("initiatorType", initiator.initiatorType);
}
