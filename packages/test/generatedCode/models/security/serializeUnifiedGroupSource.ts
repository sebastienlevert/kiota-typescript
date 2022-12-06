import {serializeGroup} from '../serializeGroup';
import {UnifiedGroupSource} from './index';
import {serializeDataSource} from './serializeDataSource';
import {SourceType} from './sourceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedGroupSource(writer: SerializationWriter, unifiedGroupSource: UnifiedGroupSource | undefined = {}) : void {
        serializeDataSource(writer, unifiedGroupSource)
            writer.writeObjectValueFromMethod("group", unifiedGroupSource.group as any, serializeGroup);
            writer.writeEnumValue<SourceType>("includedSources", unifiedGroupSource.includedSources);
}
