import {SearchEntity} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchEntity(writer: SerializationWriter, searchEntity: SearchEntity | undefined = {}) : void {
        serializeEntity(writer, searchEntity)
}
