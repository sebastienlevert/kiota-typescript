import {serializeEntity} from '../serializeEntity';
import {Store} from './index';
import {serializeGroup} from './serializeGroup';
import {serializeSet} from './serializeSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStore(writer: SerializationWriter, store: Store | undefined = {}) : void {
        serializeEntity(writer, store)
            writer.writeStringValue("defaultLanguageTag", store.defaultLanguageTag);
            writer.writeCollectionOfObjectValuesFromMethod("groups", store.groups as any, serializeGroup);
            writer.writeCollectionOfPrimitiveValues<string>("languageTags", store.languageTags);
            writer.writeCollectionOfObjectValuesFromMethod("sets", store.sets as any, serializeSet);
}
