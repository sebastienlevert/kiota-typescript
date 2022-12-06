import {deserializeIntoMediaConfig} from './deserializeIntoMediaConfig';
import {AppHostedMediaConfig} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppHostedMediaConfig(appHostedMediaConfig: AppHostedMediaConfig | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMediaConfig(appHostedMediaConfig),
        "blob": n => { appHostedMediaConfig.blob = n.getStringValue() as any ; },
    }
}
