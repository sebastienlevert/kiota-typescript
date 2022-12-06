import {IosVppEBookAssignment} from './index';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppEBookAssignment(writer: SerializationWriter, iosVppEBookAssignment: IosVppEBookAssignment | undefined = {}) : void {
        serializeManagedEBookAssignment(writer, iosVppEBookAssignment)
}
