import {VersionAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVersionAction(versionAction: VersionAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "newVersion": n => { versionAction.newVersion = n.getStringValue() as any ; },
    }
}
