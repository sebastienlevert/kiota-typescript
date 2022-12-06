import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {UserSource} from './index';
import {SourceType} from './sourceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSource(userSource: UserSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSource(userSource),
        "email": n => { userSource.email = n.getStringValue() as any ; },
        "includedSources": n => { userSource.includedSources = n.getEnumValue<SourceType>(SourceType) as any ; },
        "siteWebUrl": n => { userSource.siteWebUrl = n.getStringValue() as any ; },
    }
}
