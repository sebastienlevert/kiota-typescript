import {deserializeIntoGroup} from '../deserializeIntoGroup';
import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {UnifiedGroupSource} from './index';
import {SourceType} from './sourceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedGroupSource(unifiedGroupSource: UnifiedGroupSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSource(unifiedGroupSource),
        "group": n => { unifiedGroupSource.group = n.getObject(deserializeIntoGroup) as any ; },
        "includedSources": n => { unifiedGroupSource.includedSources = n.getEnumValue<SourceType>(SourceType) as any ; },
    }
}
