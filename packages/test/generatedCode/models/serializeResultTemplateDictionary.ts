import {ResultTemplateDictionary} from './index';
import {serializeDictionary} from './serializeDictionary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResultTemplateDictionary(writer: SerializationWriter, resultTemplateDictionary: ResultTemplateDictionary | undefined = {}) : void {
        serializeDictionary(writer, resultTemplateDictionary)
}
