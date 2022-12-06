import {Extension} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtension(writer: SerializationWriter, extension: Extension | undefined = {}) : void {
        serializeEntity(writer, extension)
}
