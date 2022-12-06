import {deserializeIntoMediaConfig} from './deserializeIntoMediaConfig';
import {deserializeIntoMediaInfo} from './deserializeIntoMediaInfo';
import {ServiceHostedMediaConfig} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHostedMediaConfig(serviceHostedMediaConfig: ServiceHostedMediaConfig | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMediaConfig(serviceHostedMediaConfig),
        "preFetchMedia": n => { serviceHostedMediaConfig.preFetchMedia = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMediaInfo) as any ; },
    }
}
