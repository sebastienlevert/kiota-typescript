import {ServiceHostedMediaConfig} from './index';
import {serializeMediaConfig} from './serializeMediaConfig';
import {serializeMediaInfo} from './serializeMediaInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHostedMediaConfig(writer: SerializationWriter, serviceHostedMediaConfig: ServiceHostedMediaConfig | undefined = {}) : void {
        serializeMediaConfig(writer, serviceHostedMediaConfig)
            writer.writeCollectionOfObjectValuesFromMethod("preFetchMedia", serviceHostedMediaConfig.preFetchMedia as any, serializeMediaInfo);
}
